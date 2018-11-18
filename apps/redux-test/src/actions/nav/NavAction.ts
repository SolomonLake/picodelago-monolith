import { Page } from "../../store/IStoreState";

export type NavGoToPageAction = {
  readonly type: "NAV__GO_TO_PAGE_ACTION";
  readonly page: Page;
};

export type NavAction = NavGoToPageAction;
