export type Page = "PlansOverview" | "Plan";

export interface IStoreState {
  readonly page: Page;
}
