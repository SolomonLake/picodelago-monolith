import { Page } from "../../store/IStoreState";
import { PlansAddPlanAction } from "./PlansAction";

class PlansActionCreator {
  addPlan(page: Page): PlansAddPlanAction {
    return {
      type: "PLANS__ADD_PLAN_ACTION"
    };
  }
}

export const plansActionCreator = new PlansActionCreator();
