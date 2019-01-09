import { Plan, Timer } from "../../store/IStoreState";

export type PlansAddPlanAction = {
  readonly type: "PLANS__ADD_PLAN_ACTION";
  readonly newPlan: Plan;
};

export type PlansDeletePlanAction = {
  readonly type: "PLANS__DELETE_PLAN_ACTION";
  readonly planId: string;
};

export type PlansUpdatePlanAction = {
  type: "PLANS__UPDATE_PLAN_ACTION";
  planUpdate: Partial<Plan>;
  planId: string;
};

export type PlansAddTimerAction = {
  type: "PLANS__ADD_TIMER_ACTION";
  newTimer: Timer;
  planId: string;
};

export type PlansAction =
  | PlansAddPlanAction
  | PlansDeletePlanAction
  | PlansUpdatePlanAction
  | PlansAddTimerAction;
