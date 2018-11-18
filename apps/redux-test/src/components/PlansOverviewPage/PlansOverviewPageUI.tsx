import React, { Component, Dispatch } from "react";
import { Button, View, Text } from "react-native";

interface IPlansOverviewPageProps {
  goToPlanPage: () => Promise<void>;
}

export class PlansOverviewPageUI extends Component<IPlansOverviewPageProps> {
  constructor(props: IPlansOverviewPageProps) {
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
          onPress={this.props.goToPlanPage}
          color="#DE5448"
          title="Plan"
        />
      </View>
    );
  }
}
