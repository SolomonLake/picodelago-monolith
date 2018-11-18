import { INavGoToPageAction } from "./NavActionTypes";
import { Page, IStoreState } from "../../store/IStoreState";
import { Dispatch } from "react";

export class NavActions {}

export function goToPage(page: Page) {
  // (dispatch: Dispatch<IStoreState>) => {
  return {
    type: "NAV__GO_TO_PAGE_ACTION",
    page
  };
  // };
}

export const navActions = new NavActions();
