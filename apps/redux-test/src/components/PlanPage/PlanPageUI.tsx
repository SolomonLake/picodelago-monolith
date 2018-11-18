import React, { Component } from "react";
import { View, Button, Text, TextInput } from "react-native";
import { Plan, PlanMap } from "../../store/IStoreState";
import { planName } from "./planUiUtils";

interface IPlanPageProps {
  plans: PlanMap;
  openPlanId: string;
  goToPlansOverviewPage: () => void;
  changePlanName: (planId: string, name: string) => void;
}

export class PlanPageUI extends Component<IPlanPageProps> {
  constructor(props: IPlanPageProps) {
    super(props);

    this.changeName = this.changeName.bind(this);
  }

  render() {
    const plan = this.props.plans[this.props.openPlanId];
    console.log("PlanPage props", this.props);
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
        <Text>{planName(plan)}</Text>
        <TextInput
          value={planName(plan)}
          onChangeText={this.changeName(plan)}
        />
      </View>
    );
  }

  changeName(plan: Plan) {
    return (name: string) => {
      this.props.changePlanName(name, plan.id);
    };
  }
}
