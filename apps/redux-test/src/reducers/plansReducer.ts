import { Action } from "../actions/Action";
import { initialStoreState } from "../store/initialStoreState";
import { updateSortedObject } from "../utils/utils";
import {
  UnreachableCaseError,
  assertUnreachableCase
} from "../utils/unreachableCase";

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

    case "PLANS__ADD_TIMER_ACTION":
      const timerPlan = _plans[action.planId];
      const newTimers = {
        [action.newTimer.id]: action.newTimer,
        ...timerPlan.timers
      };
      const newTimerPlan = {
        ...timerPlan,
        timers: newTimers
      };
      console.log("add timer", newTimerPlan);
      return updateSortedObject(_plans, action.planId, newTimerPlan);

    case "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION":
    case "NAV__GO_TO_PLAN_PAGE_ACTION":
      return _plans;
    default:
      assertUnreachableCase(action);
      return _plans;
  }
}
