import React, { Component, Dispatch } from "react";
import { View, Button } from "react-native";

interface IPlanPageProps {
  goToPlansOverviewPage: () => Promise<void>;
}

export class PlanPageUI extends Component<IPlanPageProps> {
  constructor(props: IPlanPageProps) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          alignSelf: "stretch",
          backgroundColor: "#DE5448"
        }}
      >
        <Button
          onPress={this.props.goToPlansOverviewPage}
          color="#DE5448"
          title="Back"
        />
      </View>
    );
  }
}
