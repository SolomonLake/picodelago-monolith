import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { navActionCreator } from "../../actions/nav/navActionCreator";
import { IStoreState, PlanMap } from "../../store/IStoreState";
import { PlanPageUI } from "./PlanPageUI";
import { plansActionCreator } from "../../actions/plans/plansActionCreator";

export type PlanPageState = {
  plans: PlanMap;
  openPlanId: string;
};
const mapStateToProps = (state: IStoreState): PlanPageState => {
  if (state.ui.page === "Plan") {
    const plan = state.plans[state.ui.openPlanId];
    return {
      plans: state.plans,
      openPlanId: state.ui.openPlanId
    };
  } else {
    throw new Error("PlanPage rendering without being on Plan Page");
  }
};

export type PlanPageActions = {
  goToPlansOverviewPage: () => void;
  changePlanName: (planId: string, name: string) => void;
  addTimer: () => void;
};
const mapDispatchToProps = (dispatch: Dispatch<Action>): PlanPageActions => ({
  goToPlansOverviewPage: () => {
    dispatch(navActionCreator.goToPlansOverviewPage());
  },
  changePlanName: (name: string, planId: string) => {
    dispatch(plansActionCreator.changePlanName(name, planId));
  },
  addTimer: () => {
    dispatch(plansActionCreator.addTimer());
  }
});

export type PlanPageProps = PlanPageState & PlanPageActions;

export const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanPageUI);
