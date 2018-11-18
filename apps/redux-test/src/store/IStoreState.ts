import { UIState } from "./UIState";

export type PlanCategory = "Work" | "Rest";

export type Time = {
  id: string;
  name: string;
  totalTime: number;
};

export type Plan = {
  id: string;
  name: string;
  category: PlanCategory;
  times: Array<Time>;
};

export type PlanMap = { [id: string]: Plan };

export interface IStoreState {
  readonly plans: PlanMap;
  readonly ui: UIState;
}
