import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { navActionCreator } from "../../actions/nav/navActionCreator";
import { IStoreState } from "../../store/IStoreState";
import { PlansOverviewPageUI } from "./PlansOverviewPageUI";
import { PlanPageUI } from "../PlanPage/PlanPageUI";

const mapStateToProps = (state: IStoreState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToPlanPage: () => {
    dispatch(navActionCreator.goToPlanPage());
  }
});

export const PlansOverviewPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlansOverviewPageUI);
