import { Timer } from "../../store/IStoreState";

export type TimersUpdateTimerAction = {
  type: "TIMERS__UPDATE_TIMER_ACTION";
  timerUpdate: Partial<Timer>;
  timerId: string;
  planId: string;
};

export type TimersAction = TimersUpdateTimerAction;
