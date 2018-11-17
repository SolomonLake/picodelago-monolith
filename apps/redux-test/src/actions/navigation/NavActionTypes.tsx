export interface INavGoToPlansOverviewPageAction {
  readonly type: "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION";
}

export interface INavGoToPlanPageAction {
  readonly type: "NAV__GO_TO_PLAN__PAGE_ACTION";
}

export type NavActionTypes =
  | INavGoToPlanPageAction
  | INavGoToPlansOverviewPageAction;

// export interface ISignInFailAction {
//   readonly type: keys.SIGNIN_FAIL;
//   readonly payload: {
//     readonly error: Error;
//   };
// }
