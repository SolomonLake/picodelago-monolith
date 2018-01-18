/* @flow */

var Dispatcher = require("flux").Dispatcher;

var AppDispatcher = new Dispatcher();

// Flux ActionLogger
//
// Idea + some code copied from redux-logger https://github.com/theaqua/redux-logger
//

function decorate(method, decorator) {
  return function(...args) {
    decorator.apply(this, args);
    return method.apply(this, args);
  };
}

type LogEntry = {
  action: any,
  started: number,
  startedTime: Date
};

type ActionLogger = {
  onStartDispatching: (action: any) => LogEntry,
  onStopDispatching: (logEntry: LogEntry) => void
};

const actionLogger: ?ActionLogger = createActionLogger();
const isDevelopment =
  window.peardeck &&
  window.peardeck.config &&
  window.peardeck.config.releaseStage === "development";

AppDispatcher._startDispatching = decorate(
  AppDispatcher._startDispatching,
  function(action) {
    if (isDevelopment && actionLogger && !action.noLog) {
      this._logEntry = actionLogger.onStartDispatching(action);
    } else {
      this._logEntry = null;
    }
  }
);

AppDispatcher._stopDispatching = decorate(
  AppDispatcher._stopDispatching,
  function(action) {
    if (isDevelopment && actionLogger && this._logEntry) {
      actionLogger.onStopDispatching(this._logEntry);
    }
  }
);

function createActionLogger(): ?ActionLogger {
  // Use the new performance api to get better precision if available
  declare var performance: {
    now: () => number
  };
  const timer: () => number =
    typeof performance !== "undefined" && typeof performance.now === "function"
      ? () => performance.now()
      : () => new Date().valueOf();

  const colors = {
    title: "#000000",
    action: "#03A9F4"
  };

  var logger = console;

  return {
    onStartDispatching: (action: any): LogEntry => {
      return {
        action: action,
        started: timer(),
        startedTime: new Date()
      };
    },
    onStopDispatching: (logEntry: LogEntry) => {
      const formattedAction = logEntry.action;

      const startTime = new Date().getTime() - window.peardeck.loadTime;
      const titleCSS = `color: ${colors.title};`;
      const took = timer() - logEntry.started;
      const title = `@ ${("0000000" + (startTime / 1000.0).toFixed(3)).slice(
        -9
      )}: action ${formattedAction.type} (in ${took.toFixed(2)} ms)`;
      // render
      try {
        if (colors.title) logger.groupCollapsed(`%c ${title}`, titleCSS);
        else logger.groupCollapsed(title);
      } catch (e) {
        logger.log(title);
      }

      const actionLevel = "info";

      if (actionLevel) {
        if (colors.action)
          logger[actionLevel](
            `%c action`,
            `color: ${colors.action}; font-weight: bold`,
            formattedAction
          );
        else logger[actionLevel](`action`, formattedAction);
      }

      try {
        logger.groupEnd();
      } catch (e) {
        logger.log("—— log end ——");
      }
    }
  };
}

module.exports = AppDispatcher;
