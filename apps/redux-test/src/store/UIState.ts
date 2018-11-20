export type Page = "PlansOverview" | "Plan";

export type OverviewPageState = {
  page: "PlansOverview";
};

export type PlanPageState = {
  page: "Plan";
  openPlanId: string;
};

export type UIState = OverviewPageState | PlanPageState;
