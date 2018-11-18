import { initialStoreState } from "../store/initialStoreState";
import { Action } from "../actions/Action";
import { combineReducers } from "redux";
import { UIState } from "../store/UIState";

export function uiReducer(_ui = initialStoreState.ui, action: Action): UIState {
  switch (action.type) {
    case "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION":
      return { page: "PlansOverview" };

    case "NAV__GO_TO_PLAN_PAGE_ACTION":
      return { page: "Plan", openPlan: action.plan };

    case "PLANS__ADD_PLAN_ACTION":
      return { page: "Plan", openPlan: action.newPlan };

    default:
      return _ui;
  }
}
