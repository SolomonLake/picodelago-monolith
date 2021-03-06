import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../actions/Action";
import { IStoreState } from "../store/IStoreState";
import { MainUI } from "./MainUI";

const mapStateToProps = (state: IStoreState) => {
  return {
    page: state.ui.page
  };
};

const mapDispatchToProps = (_: Dispatch<Action>) => ({});

export const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUI);
