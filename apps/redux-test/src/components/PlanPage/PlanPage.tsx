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
      plans: state.plans,
      openPlanId: state.ui.openPlanId
    };
  } else {
    throw new Error("PlanPage rendering without being on Plan Page");
  }
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToPlansOverviewPage: () => {
    dispatch(navActionCreator.goToPlansOverviewPage());
  },
  changePlanName: (name: string, planId: string) => {
    dispatch(plansActionCreator.changePlanName(name, planId));
  }
});

export const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanPageUI);
