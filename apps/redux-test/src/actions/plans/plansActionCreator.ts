import { Plan } from "../../store/IStoreState";
import { PlansAddPlanAction } from "./PlansAction";
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
}

export const plansActionCreator = new PlansActionCreator();
