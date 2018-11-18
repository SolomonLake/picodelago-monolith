import { initialStoreState } from "../store/initialStoreState";
import { Action } from "../actions/Action";

export function plansReducer(state = initialStoreState.plans, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
