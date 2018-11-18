import { Plan } from "../../store/IStoreState";

export type PlansAddPlanAction = {
  readonly type: "PLANS__ADD_PLAN_ACTION";
  readonly newPlan: Plan;
};

export type PlansChangePlanNameAction = {
  type: "PLANS__CHANGE_PLAN_NAME_ACTION";
  name: string;
  planId: string;
};

export type PlansAction = PlansAddPlanAction | PlansChangePlanNameAction;
