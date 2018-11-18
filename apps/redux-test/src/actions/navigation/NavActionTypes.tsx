import { Page } from "../../store/IStoreState";

export interface INavGoToPageAction {
  readonly type: "NAV__GO_TO_PAGE_ACTION";
  readonly page: Page;
}

export type NavActionTypes = INavGoToPageAction;

// export interface ISignInFailAction {
//   readonly type: keys.SIGNIN_FAIL;
//   readonly payload: {
//     readonly error: Error;
//   };
// }
