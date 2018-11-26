import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { navActionCreator } from "../../actions/nav/navActionCreator";
import { plansActionCreator } from "../../actions/plans/plansActionCreator";
import { IStoreState, Plan } from "../../store/IStoreState";
import { PlanPageUI } from "./PlanPageUI";

export type PlanPageState = {
  plan: Plan;
};
const mapStateToProps = (state: IStoreState): PlanPageState => {
  if (state.ui.page === "Plan") {
    const plan = state.plans[state.ui.openPlanId];
    return {
      plan
    };
  } else {
    throw new Error("PlanPage rendering without being on Plan Page");
  }
};

export type PlanPageActions = {
  goToPlansOverviewPage: () => void;
  changePlanName: (name: string, planId: string) => void;
  startPlanFn: (planId: string, activeTimer: string) => () => void;
  endPlanFn: (planId: string) => () => void;
  addTimerFn: (plan: Plan) => (() => void);
};
const mapDispatchToProps = (dispatch: Dispatch<Action>): PlanPageActions => ({
  goToPlansOverviewPage: () => {
    dispatch(navActionCreator.goToPlansOverviewPage());
  },
  changePlanName: (name: string, planId: string) => {
    dispatch(plansActionCreator.changePlanName(name, planId));
  },
  startPlanFn: (planId: string, activeTimer: string) => () => {
    dispatch(plansActionCreator.startPlan(planId, activeTimer));
  },
  endPlanFn: (planId: string) => () => {
    dispatch(plansActionCreator.endPlan(planId));
  },
  addTimerFn: (plan: Plan) => () => {
    dispatch(plansActionCreator.addTimer(plan.id));
  }
});

export type PlanPageProps = PlanPageState & PlanPageActions;

export const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanPageUI);
