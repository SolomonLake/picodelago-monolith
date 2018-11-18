import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { navActionCreator } from "../../actions/nav/navActionCreator";
import { IStoreState, Plan } from "../../store/IStoreState";
import { PlansOverviewPageUI } from "./PlansOverviewPageUI";
import { plansActionCreator } from "../../actions/plans/plansActionCreator";

const mapStateToProps = (state: IStoreState) => {
  return {
    plans: state.plans
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToPlanPage: (plan: Plan) => {
    dispatch(navActionCreator.goToPlanPage(plan));
  },
  addPlan: () => {
    dispatch(plansActionCreator.addPlan());
  }
});

export const PlansOverviewPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlansOverviewPageUI);
