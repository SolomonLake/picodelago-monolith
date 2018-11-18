import { initialStoreState } from "../store/initialStoreState";
import { Page } from "../store/IStoreState";
import { Action } from "../actions/Action";

export function pageReducer(
  state = initialStoreState.page,
  action: Action
): Page {
  switch (action.type) {
    case "NAV__GO_TO_PAGE_ACTION":
      return action.page;

    default:
      return state;
  }
}
