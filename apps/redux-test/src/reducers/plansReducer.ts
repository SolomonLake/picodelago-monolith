import { initialStoreState } from "../store/initialStoreState";
import { Action } from "../actions/Action";
import { Plan } from "../store/IStoreState";
import { updateObject } from "../utils/utils";

export function plansReducer(_plans = initialStoreState.plans, action: Action) {
  switch (action.type) {
    case "PLANS__ADD_PLAN_ACTION":
      return { [action.newPlan.id]: action.newPlan, ..._plans };
    case "PLANS__CHANGE_PLAN_NAME_ACTION":
      console.log("all plans", _plans);
      const newPlan = {
        ..._plans[action.planId],
        name: action.name
      };
      console.log("newPlan", newPlan);
      const newPlans = updateObject(_plans, action.planId, newPlan);
      console.log("newPlans", newPlans);
      return newPlans;
    default:
      return _plans;
  }
}
