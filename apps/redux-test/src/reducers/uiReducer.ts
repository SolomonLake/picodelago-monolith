import { initialStoreState } from "../store/initialStoreState";
import { Action } from "../actions/Action";
import { UIState } from "../store/UIState";
import {
  UnreachableCaseError,
  assertUnreachableCase
} from "../utils/unreachableCase";

export function uiReducer(_ui = initialStoreState.ui, action: Action): UIState {
  switch (action.type) {
    case "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION":
      return { page: "PlansOverview" };

    case "NAV__GO_TO_PLAN_PAGE_ACTION":
      return { page: "Plan", openPlanId: action.plan.id };

    case "PLANS__ADD_PLAN_ACTION":
      return { page: "Plan", openPlanId: action.newPlan.id };

    case "PLANS__CHANGE_PLAN_NAME_ACTION":
    case "PLANS__ADD_TIMER_ACTION":
      return _ui;
    default:
      assertUnreachableCase(action);
      return _ui;
  }
}
