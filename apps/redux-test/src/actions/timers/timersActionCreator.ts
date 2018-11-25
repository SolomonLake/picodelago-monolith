import { Timer } from "../../store/IStoreState";
import { TimersUpdateTimerAction } from "./TimersActions";
import { TimerTimes } from "../../components/Timer/timerUtils";

class TimersActionCreator {
  private updateTimer(
    timerUpdate: Partial<Timer>,
    timerId: string,
    planId: string
  ): TimersUpdateTimerAction {
    return {
      type: "TIMERS__UPDATE_TIMER_ACTION",
      timerUpdate,
      timerId,
      planId
    };
  }
  changeTimerName(
    name: string,
    timerId: string,
    planId: string
  ): TimersUpdateTimerAction {
    return this.updateTimer({ name }, timerId, planId);
  }
  changeTimerTimes(
    times: TimerTimes,
    timerId: string,
    planId: string
  ): TimersUpdateTimerAction {
    return this.updateTimer({ times }, timerId, planId);
  }
}

export const timersActionCreator = new TimersActionCreator();
