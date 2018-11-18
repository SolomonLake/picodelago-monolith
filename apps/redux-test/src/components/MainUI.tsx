import React, { Component } from "react";
import { View } from "react-native";

import { Page } from "../store/IStoreState";
import { MainStyles } from "./Main.styles";
import { PlanPage } from "./PlanPage/PlanPage";
import { PlansOverviewPage } from "./PlansOverviewPage/PlansOverviewPage";

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
        {() => {
          switch (this.props.page) {
            case "PlansOverview":
              return <PlansOverviewPage />;
              break;
            case "Plan":
              return <PlanPage />;
              break;
          }
        }}
      </View>
    );
  }
}
