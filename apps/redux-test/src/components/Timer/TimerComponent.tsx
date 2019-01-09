import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { IStoreState, Plan, Timer } from "../../store/IStoreState";
import { TimerComponentUI } from "./TimerComponentUI";
import { timersActionCreator } from "../../actions/timers/timersActionCreator";
import { TimerTimes } from "./timerUtils";
import { dispatch } from "../../store";

export type TimerComponentState = {
  timer: Timer;
  plan: Plan;
};
const mapStateToProps = (
  _: IStoreState,
  ownProps: { timer: Timer; plan: Plan }
): TimerComponentState => {
  return {
    timer: ownProps.timer,
    plan: ownProps.plan
  };
};

export type TimerComponentActions = {
  changeTimerName: (name: string, timerId: string, planId: string) => void;
  changeTimerTimes: (
    times: TimerTimes,
    timerId: string,
    planId: string
  ) => void;
};
const mapDispatchToProps = (_: Dispatch<Action>): TimerComponentActions => ({
  changeTimerName: (name: string, timerId: string, planId: string) => {
    dispatch(timersActionCreator.changeTimerName(name, timerId, planId));
  },
  changeTimerTimes: (times: TimerTimes, timerId: string, planId: string) => {
    dispatch(timersActionCreator.changeTimerTimes(times, timerId, planId));
  }
});

export type TimerComponentProps = TimerComponentState & TimerComponentActions;

export const TimerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerComponentUI);
