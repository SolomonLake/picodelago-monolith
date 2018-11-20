import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { navActionCreator } from "../../actions/nav/navActionCreator";
import { IStoreState, Plan, Timer } from "../../store/IStoreState";
import { TimerComponentUI } from "./TimerComponentUI";
import { plansActionCreator } from "../../actions/plans/plansActionCreator";
import { timersActionCreator } from "../../actions/timers/timersActionCreator";

export type TimerComponentState = {
  timer: Timer;
  plan: Plan;
};
const mapStateToProps = (
  state: IStoreState,
  ownProps: { timer: Timer; plan: Plan }
): TimerComponentState => {
  return {
    timer: ownProps.timer,
    plan: ownProps.plan
  };
};

export type TimerComponentActions = {
  changeTimerName: (name: string, timerId: string, planId: string) => void;
  changeTimerTotalTime: (
    totalTime: number,
    timerId: string,
    planId: string
  ) => void;
};
const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): TimerComponentActions => ({
  changeTimerName: (name: string, timerId: string, planId: string) => {
    dispatch(timersActionCreator.changeTimerName(name, timerId, planId));
  },
  changeTimerTotalTime: (
    totalTime: number,
    timerId: string,
    planId: string
  ) => {
    dispatch(
      timersActionCreator.changeTimerTotalTime(totalTime, timerId, planId)
    );
  }
});

export type TimerComponentProps = TimerComponentState & TimerComponentActions;

export const TimerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerComponentUI);
