import { Plan } from "../../store/IStoreState";

export type NavGoToPlansOverviewPageAction = {
  readonly type: "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION";
};

export type NavGoToPlanPageAction = {
  readonly type: "NAV__GO_TO_PLAN_PAGE_ACTION";
  readonly plan: Plan;
};

export type NavAction = NavGoToPlansOverviewPageAction | NavGoToPlanPageAction;
