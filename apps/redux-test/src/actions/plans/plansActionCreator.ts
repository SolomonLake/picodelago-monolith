import { Plan, Timer } from "../../store/IStoreState";
import {
  PlansAddPlanAction,
  PlansAddTimerAction,
  PlansUpdatePlanAction
} from "./PlansAction";
import { uuid } from "../../utils/uuid";
import { THIRTY_MINUTES } from "../../utils/unitsOfTime";

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
  totalTime: THIRTY_MINUTES,
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
  addTimer(planId: string): PlansAddTimerAction {
    return {
      type: "PLANS__ADD_TIMER_ACTION",
      newTimer: defaultTimer(),
      planId
    };
  }
}

export const plansActionCreator = new PlansActionCreator();
