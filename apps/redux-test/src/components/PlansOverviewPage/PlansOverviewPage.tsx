import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { navActionCreator } from "../../actions/nav/navActionCreator";
import { IStoreState } from "../../store/IStoreState";
import { PlansOverviewPageUI } from "./PlansOverviewPageUI";
import { plansActionCreator } from "../../actions/plans/plansActionCreator";

const mapStateToProps = (state: IStoreState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToPlanPage: () => {
    dispatch(navActionCreator.goToPlanPage());
  },
  addPlan: () => {
    dispatch(plansActionCreator.addPlan());
  }
});

export const PlansOverviewPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlansOverviewPageUI);
