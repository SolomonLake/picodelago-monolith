import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { navActionCreator } from "../../actions/nav/navActionCreator";
import { IStoreState } from "../../store/IStoreState";
import { PlanPageUI } from "./PlanPageUI";
import { plansActionCreator } from "../../actions/plans/plansActionCreator";

const mapStateToProps = (state: IStoreState) => {
  if (state.ui.page === "Plan") {
    return {
      plan: state.plans[state.ui.openPlanId]
    };
  } else {
    throw new Error("PlanPage rendering without being on Plan Page");
  }
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToPlansOverviewPage: () => {
    dispatch(navActionCreator.goToPlansOverviewPage());
  },
  changePlanName: (planId: string, name: string) => {
    dispatch(plansActionCreator.changePlanName(planId, name));
  }
});

export const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanPageUI);
