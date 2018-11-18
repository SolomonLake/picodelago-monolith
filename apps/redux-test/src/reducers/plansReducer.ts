import { initialStoreState } from "../store/initialStoreState";
import { Action } from "../actions/Action";
import { Plan } from "../store/IStoreState";

export function plansReducer(_plans = initialStoreState.plans, action: Action) {
  switch (action.type) {
    case "PLANS__ADD_PLAN_ACTION":
      return [action.newPlan, ..._plans];
    default:
      return _plans;
  }
}
