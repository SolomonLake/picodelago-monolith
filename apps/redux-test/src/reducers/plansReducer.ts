import { Action } from "../actions/Action";
import { initialStoreState } from "../store/initialStoreState";
import { updateSortedObject } from "../utils/utils";
import { assertUnreachableCase } from "../utils/unreachableCase";
import { PlanMap, Plan, Timer } from "../store/IStoreState";

export function plansReducer(
  _plans = initialStoreState.plans,
  action: Action
): PlanMap {
  switch (action.type) {
    case "PLANS__ADD_PLAN_ACTION":
      return { [action.newPlan.id]: action.newPlan, ..._plans };

    case "PLANS__UPDATE_PLAN_ACTION":
      return updatePlanReducer(_plans, action.planId, action.planUpdate);

    case "PLANS__ADD_TIMER_ACTION":
      const timerPlan = _plans[action.planId];
      const newTimers = {
        [action.newTimer.id]: action.newTimer,
        ...timerPlan.timers
      };
      return updatePlanReducer(_plans, action.planId, { timers: newTimers });

    case "TIMERS__UPDATE_TIMER_ACTION":
      return updateTimerReducer(
        _plans,
        action.planId,
        action.timerId,
        action.timerUpdate
      );

    case "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION":
    case "NAV__GO_TO_PLAN_PAGE_ACTION":
      return _plans;
    default:
      assertUnreachableCase(action);
      return _plans;
  }
}

function updatePlanReducer(
  _plans: PlanMap,
  planId: string,
  planUpdate: Partial<Plan>
) {
  const newPlan = {
    ..._plans[planId],
    ...planUpdate
  };
  return updateSortedObject(_plans, planId, newPlan);
}

function updateTimerReducer(
  _plans: PlanMap,
  planId: string,
  timerId: string,
  timerUpdate: Partial<Timer>
) {
  const timerPlan = _plans[planId];
  const newTimer = {
    ...timerPlan.timers[timerId],
    ...timerUpdate
  };
  const newTimers = updateSortedObject(timerPlan.timers, timerId, newTimer);
  return updatePlanReducer(_plans, planId, { timers: newTimers });
}
