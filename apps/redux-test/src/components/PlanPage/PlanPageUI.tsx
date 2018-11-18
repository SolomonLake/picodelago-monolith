import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { Plan } from "../../store/IStoreState";
import { planName } from "./PlanUiUtils";

interface IPlanPageProps {
  plan: Plan;
  goToPlansOverviewPage: () => void;
  changePlanName: (planId: string, name: string) => void;
}

export class PlanPageUI extends Component<IPlanPageProps> {
  constructor(props: IPlanPageProps) {
    super(props);
  }
  render() {
    console.log("plan page!", this.props.plan);
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
        <Text>{planName(this.props.plan)}</Text>
      </View>
    );
  }
}
