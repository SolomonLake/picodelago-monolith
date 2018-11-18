import { Plan } from "./IStoreState";

export type Page = "PlansOverview" | "Plan";

export type OverviewPageState = {
  page: "PlansOverview";
};

export type PlanPageState = {
  page: "Plan";
  openPlan: Plan;
};

export type UIState = OverviewPageState | PlanPageState;
