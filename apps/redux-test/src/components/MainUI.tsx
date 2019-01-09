import React, { Component } from "react";
import { View } from "react-native";

import { Page } from "../store/UIState";
import { MainStyles } from "./Main.styles";
import { PlanPage } from "./PlanPage/PlanPage";
import { PlansOverviewPage } from "./PlansOverviewPage/PlansOverviewPage";
import { Button_Text } from "./GenericComponents/Button_Text";
import { store } from "../store";

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
        {PageUI(this.props.page)}
        <View>
          <Button_Text
            text="Log State"
            onPress={() => {
              console.log("CURRENT STATE!", store.getState());
            }}
            styles={{
              text: { color: "#FFFFFF", fontSize: 15 }
            }}
          />
        </View>
      </View>
    );
  }
}

const PageUI = (page: Page) => {
  switch (page) {
    case "PlansOverview":
      return <PlansOverviewPage />;
      break;
    case "Plan":
      return <PlanPage />;
      break;
  }
};
