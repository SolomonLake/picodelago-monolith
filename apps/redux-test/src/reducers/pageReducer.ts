import { initialStoreState } from "../store/initialStoreState";
import { Page } from "../store/IStoreState";
import { ActionTypes } from "../actions/ActionTypes";

export function pageReducer(
  state = initialStoreState.page,
  action: ActionTypes
): Page {
  switch (action.type) {
    case "NAV__GO_TO_PAGE_ACTION":
      return action.page;

    default:
      return state;
  }
}
