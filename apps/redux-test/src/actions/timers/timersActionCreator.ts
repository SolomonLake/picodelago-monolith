import { Timer } from "../../store/IStoreState";
import { TimersUpdateTimerAction } from "./TimersActions";

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
  changeTimerTotalTime(
    totalTime: number,
    timerId: string,
    planId: string
  ): TimersUpdateTimerAction {
    return this.updateTimer({ totalTime }, timerId, planId);
  }
}

export const timersActionCreator = new TimersActionCreator();
