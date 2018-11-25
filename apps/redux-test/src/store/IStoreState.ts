import { UIState } from "./UIState";
import { TimerTimes } from "../components/Timer/timerUtils";

export type TimerCategory = "Work" | "Rest";

// times are in milliseconds
export type Timer = {
  id: string;
  name: string;
  times: TimerTimes;
  currentTime: number;
  category: TimerCategory;
};
export type TimerMap = { [id: string]: Timer };

export type PlanStatus = "active" | "paused" | "overview";
export type PlanOverviewState = {
  status: "overview";
};
export type PlanActiveState = {
  status: "active";
  activeTimer: string;
};
export type PlanPausedState = {
  status: "paused";
  activeTimer: string;
};
export type PlanState = PlanOverviewState | PlanActiveState | PlanPausedState;

export type Plan = {
  state: PlanState;
  id: string;
  name: string;
  timers: TimerMap;
};

export type PlanMap = { [id: string]: Plan };

export interface IStoreState {
  readonly plans: PlanMap;
  readonly ui: UIState;
}
