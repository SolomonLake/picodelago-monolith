import { Dispatch } from "react";
import { connect } from "react-redux";

import { Action } from "../actions/Action";
import { navActionCreator } from "../actions/nav/navActionCreator";
import { IStoreState, Page } from "../store/IStoreState";
import { MainView } from "./MainView";

const mapStateToProps = (state: IStoreState) => {
  return {
    page: state.page
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToPage: (page: Page) => {
    dispatch(navActionCreator.goToPage(page));
  }
});

export const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
