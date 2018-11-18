import { Page, IStoreState } from "../store/IStoreState";
import React, { Dispatch, Component } from "react";
import { View, Button } from "react-native";
import { MainStyles } from "./MainStyles";
import { PlansOverviewPage } from "./PlansOverviewPage/PlansOverviewPage";
import PlanPage from "./PlanPage/PlanPage";

interface IMainProps {
  readonly page: Page;
  goToPage: (page: Page) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

export class MainView extends Component<IMainProps> {
  constructor(props: IMainProps) {
    super(props);
  }

  public render() {
    return (
      <View>
        <View style={MainStyles.status_bar_buffer} />
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
