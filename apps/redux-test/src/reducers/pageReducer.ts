import { initialStoreState } from "../store/initialStoreState";
import { Page } from "../store/IStoreState";
import { ActionTypes } from "../actions/ActionTypes";

export function pageReducer(
  state = initialStoreState.page,
  action: ActionTypes
): Page {
  switch (action.type) {
    case "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION":
      return "PlansOverview";

    case "NAV__GO_TO_PLAN__PAGE_ACTION":
      return "Plan";

    default:
      return state;
  }
}
