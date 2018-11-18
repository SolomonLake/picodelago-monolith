import { initialStoreState } from "../store/initialStoreState";
import { Action } from "../actions/Action";
import { Plan } from "../store/IStoreState";
import { updateSortedObject } from "../utils/utils";

export function plansReducer(_plans = initialStoreState.plans, action: Action) {
  switch (action.type) {
    case "PLANS__ADD_PLAN_ACTION":
      return { [action.newPlan.id]: action.newPlan, ..._plans };

    case "PLANS__CHANGE_PLAN_NAME_ACTION":
      const newPlan = {
        ..._plans[action.planId],
        name: action.name
      };
      return updateSortedObject(_plans, action.planId, newPlan);

    default:
      return _plans;
  }
}
