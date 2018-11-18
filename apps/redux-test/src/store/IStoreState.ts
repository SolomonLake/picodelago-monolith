export type Page = "PlansOverview" | "Plan";

export type PlanCategory = "Work" | "Rest";

export type Time = {
  name: string;
  totalTime: number;
};

export type Plan = {
  name: string;
  category: PlanCategory;
  times: Array<Time>;
};

export interface IStoreState {
  readonly page: Page;
  readonly plans: Array<Plan>;
}
