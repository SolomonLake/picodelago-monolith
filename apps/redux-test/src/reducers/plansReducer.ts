import { Action } from "../actions/Action";
import { initialStoreState } from "../store/initialStoreState";
import {
  updateSortedObject,
  mapObject,
  indexOfObj,
  removeKey
} from "../utils/objectUtils";
import { assertUnreachableCase } from "../utils/unreachableCase";
import { PlanMap, Plan, Timer } from "../store/IStoreState";
import { timerTimesToMs } from "../components/Timer/timerUtils";
import { resetTimers } from "../components/Timer/timerUiUtils";
import { notificationApi } from "../effects/notificationsApi";

export function plansReducer(
  _plans = initialStoreState.plans,
  action: Action
): PlanMap {
  switch (action.type) {
    case "PLANS__ADD_PLAN_ACTION":
      return { [action.newPlan.id]: action.newPlan, ..._plans };

    case "PLANS__DELETE_PLAN_ACTION":
      return removeKey(_plans, action.planId);

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

    case "GLOBAL_TICK__TOCK_ACTION":
      return updateTimerTimesReducer(_plans);

    case "LOAD_STATE__GOT_LOADED_STATE":
      return action.state.plans;

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
  const newState = updateSortedObject(_plans, planId, newPlan);
  return newState;
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

function updateTimerTimesReducer(_plans: PlanMap): PlanMap {
  return mapObject(_plans, (plan, _planId) => {
    switch (plan.state.status) {
      case "overview":
      case "paused":
        return plan;
      case "active":
        const activeTimerId = plan.state.activeTimer;
        const activeTimer = plan.timers[activeTimerId];
        const newTimestamp = Date.now();
        const currentTime =
          activeTimer.currentTime + (newTimestamp - plan.state.timestamp);
        const timeIsUp = currentTime >= timerTimesToMs(activeTimer.times);
        const newCurrentTime = timeIsUp
          ? timerTimesToMs(activeTimer.times)
          : currentTime;
        const newTimer = {
          ...activeTimer,
          currentTime: newCurrentTime
        };
        const newTimers = updateSortedObject(
          plan.timers,
          activeTimerId,
          newTimer
        );

        if (timeIsUp) {
          const indexOfActiveTimer = indexOfObj(newTimers, activeTimerId);
          const timerIdsArray = Object.keys(newTimers);
          const nextTimerId =
            indexOfActiveTimer != null
              ? timerIdsArray[indexOfActiveTimer + 1]
              : null;
          if (nextTimerId) {
            return {
              ...plan,
              timers: newTimers,
              state: {
                ...plan.state,
                activeTimer: nextTimerId,
                timestamp: newTimestamp
              }
            };
          } else {
            // plan is done
            const overviewPlan: Plan = {
              ...plan,
              state: { status: "overview" },
              timers: resetTimers(plan.timers)
            };
            notificationApi.notifyPlanIsDone(plan);
            return overviewPlan;
          }
        } else {
          return {
            ...plan,
            timers: newTimers,
            state: { ...plan.state, timestamp: newTimestamp }
          };
        }
    }
  });
}
