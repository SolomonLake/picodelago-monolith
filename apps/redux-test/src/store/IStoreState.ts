export type Page = "PlansOverview" | "Plan";

export interface IStoreState {
  readonly page: Page;
}

export interface State {
  readonly page: Page;
}
