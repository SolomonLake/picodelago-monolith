import { initialStoreState } from "../store/initialStoreState";
import { Action } from "../actions/Action";
import { UIState } from "../store/UIState";
import { assertUnreachableCase } from "../utils/unreachableCase";

export function uiReducer(_ui = initialStoreState.ui, action: Action): UIState {
  switch (action.type) {
    case "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION":
      return { page: "PlansOverview" };

    case "NAV__GO_TO_PLAN_PAGE_ACTION":
      return { page: "Plan", openPlanId: action.plan.id };

    case "PLANS__ADD_PLAN_ACTION":
      return { page: "Plan", openPlanId: action.newPlan.id };

    case "LOAD_STATE__GOT_LOADED_STATE":
      return action.state.ui;

    case "PLANS__UPDATE_PLAN_ACTION":
    case "PLANS__ADD_TIMER_ACTION":
    case "TIMERS__UPDATE_TIMER_ACTION":
    case "GLOBAL_TICK__TOCK_ACTION":
      return _ui;
    default:
      assertUnreachableCase(action);
      return _ui;
  }
}
