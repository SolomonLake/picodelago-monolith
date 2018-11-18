import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../../actions/Action";
import { navActionCreator } from "../../actions/nav/navActionCreator";
import { IStoreState } from "../../store/IStoreState";
import { PlanPageUI } from "./PlanPageUI";

const mapStateToProps = (state: IStoreState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToPlansOverviewPage: () => {
    dispatch(navActionCreator.goToPlansOverviewPage());
  }
});

export const PlanPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanPageUI);
