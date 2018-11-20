import { Plan, Timer } from "../../store/IStoreState";
import {
  PlansAddPlanAction,
  PlansChangePlanNameAction,
  PlansAddTimerAction
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
  changePlanName(name: string, planId: string): PlansChangePlanNameAction {
    return {
      type: "PLANS__CHANGE_PLAN_NAME_ACTION",
      name,
      planId
    };
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
