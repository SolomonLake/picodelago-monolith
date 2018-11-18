import { initialStoreState } from "../store/initialStoreState";
import { Action } from "../actions/Action";
import { combineReducers } from "redux";
import { UIState } from "../store/UIState";

export function uiReducer(_ui = initialStoreState.ui, action: Action): UIState {
  switch (action.type) {
    case "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION":
      return { page: "PlansOverview" };

    case "NAV__GO_TO_PLAN_PAGE_ACTION":
      return { page: "Plan", openPlanId: action.plan.id };

    case "PLANS__ADD_PLAN_ACTION":
      return { page: "Plan", openPlanId: action.newPlan.id };

    default:
      return _ui;
  }
}
