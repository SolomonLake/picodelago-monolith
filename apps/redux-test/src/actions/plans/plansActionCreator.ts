import { Plan, Timer } from "../../store/IStoreState";
import {
  PlansAddPlanAction,
  PlansAddTimerAction,
  PlansUpdatePlanAction
} from "./PlansAction";
import { uuid } from "../../utils/uuid";
import { THIRTY_MINUTES, ONE_SECOND } from "../../utils/unitsOfTime";
import { msToTimerTimes } from "../../components/Timer/timerUtils";
import { store } from "../../store";
import { resetTimers } from "../../components/Timer/timerUiUtils";

const defaultPlan = (): Plan => ({
  state: {
    status: "overview"
  },
  id: uuid(),
  name: "",
  timers: {}
});
const defaultTimer = (): Timer => ({
  id: uuid(),
  name: "",
  currentTime: 0,
  times: msToTimerTimes(ONE_SECOND * 3),
  category: "Work"
});
class PlansActionCreator {
  addPlan(): PlansAddPlanAction {
    return {
      type: "PLANS__ADD_PLAN_ACTION",
      newPlan: defaultPlan()
    };
  }
  private updatePlan(
    planUpdate: Partial<Plan>,
    planId: string
  ): PlansUpdatePlanAction {
    return {
      type: "PLANS__UPDATE_PLAN_ACTION",
      planUpdate,
      planId
    };
  }
  changePlanName(name: string, planId: string): PlansUpdatePlanAction {
    return this.updatePlan({ name }, planId);
  }
  startPlan(planId: string, activeTimer: string): PlansUpdatePlanAction {
    const timers = store.getState().plans[planId].timers;
    return this.updatePlan(
      {
        state: {
          status: "active",
          activeTimer,
          timestamp: Date.now()
        },
        timers: resetTimers(timers)
      },
      planId
    );
  }
  endPlan(planId: string): PlansUpdatePlanAction {
    const timers = store.getState().plans[planId].timers;
    return this.updatePlan(
      {
        state: { status: "overview" },
        timers: resetTimers(timers)
      },
      planId
    );
  }
  addTimer(planId: string): PlansAddTimerAction {
    return {
      type: "PLANS__ADD_TIMER_ACTION",
      newTimer: defaultTimer(),
      planId
    };
  }
}

export const plansActionCreator = new PlansActionCreator();
