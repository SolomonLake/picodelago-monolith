import { Page, IStoreState } from "../store/IStoreState";
import React, { Dispatch, Component } from "react";
import { View, Button } from "react-native";
import { MainStyles } from "./Main.styles";
import { PlansOverviewPage } from "./PlansOverviewPage/PlansOverviewPage";
import { PlanPage } from "./PlanPage/PlanPage";

interface IMainProps {
  readonly page: Page;
}

export class MainUI extends Component<IMainProps> {
  constructor(props: IMainProps) {
    super(props);
  }

  public render() {
    return (
      <View>
        <View style={MainStyles.status_bar_buffer} />
        {pageComponent(this.props.page)}
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
