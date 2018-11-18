import { Plan } from "../../store/IStoreState";

export type PlansAddPlanAction = {
  readonly type: "PLANS__ADD_PLAN_ACTION";
  readonly newPlan: Plan;
};

export type PlansAction = PlansAddPlanAction;
