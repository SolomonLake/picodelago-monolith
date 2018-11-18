import React, { Dispatch } from "react";
import { PlansOverviewPage } from "./PlansOverviewPage/PlansOverviewPage";
import { Switch, Button, View, StyleSheet } from "react-native";
import { rootReducer } from "../reducers/rootReducer";
import { IStoreState, Page } from "../store/IStoreState";
import { connect } from "react-redux";
import PlanPage from "./PlanPage/PlanPage";
import { mainStyles } from "./main_styles";
import { Action } from "../actions/Action";
import { navActionCreator } from "../actions/nav/navActionCreator";

interface IMainProps {
  readonly page: Page;
  goToPage: (page: Page) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class MainView extends React.Component<IMainProps> {
  constructor(props: IMainProps) {
    super(props);
  }

  public render() {
    return (
      <View>
        <View style={mainStyles.status_bar_buffer} />
        {/* {pageComponent(this.props.page)} */}
        <Button
          onPress={() => {
            this.props.goToPage("Plan");
          }}
          color="#DE5448"
          title={this.props.page}
        />
      </View>
    );
  }
}

function pageComponent(page: Page) {
  switch (page) {
    case "PlansOverview":
      return <PlansOverviewPage />;
      break;
    case "Plan":
      return <PlanPage />;
      break;
  }
}

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
