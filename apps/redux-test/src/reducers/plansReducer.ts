import { Action } from "../actions/Action";
import { initialStoreState } from "../store/initialStoreState";
import { updateSortedObject } from "../utils/utils";
import { assertUnreachableCase } from "../utils/unreachableCase";
import { PlanMap } from "../store/IStoreState";

export function plansReducer(
  _plans = initialStoreState.plans,
  action: Action
): PlanMap {
  switch (action.type) {
    case "PLANS__ADD_PLAN_ACTION":
      return { [action.newPlan.id]: action.newPlan, ..._plans };

    case "PLANS__UPDATE_PLAN_ACTION":
      const _newPlan = {
        ..._plans[action.planId],
        ...action.planUpdate
      };
      return updateSortedObject(_plans, action.planId, _newPlan);

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
      return updateSortedObject(_plans, action.planId, newTimerPlan);

    case "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION":
    case "NAV__GO_TO_PLAN_PAGE_ACTION":
      return _plans;
    default:
      assertUnreachableCase(action);
      return _plans;
  }
}
