import { Plan } from "../../store/IStoreState";
import { PlansAddPlanAction, PlansChangePlanNameAction } from "./PlansAction";
import { uuid } from "../../utils/uuid";

const defaultPlan = (): Plan => ({
  id: uuid(),
  name: "",
  category: "Work",
  times: []
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
}

export const plansActionCreator = new PlansActionCreator();
