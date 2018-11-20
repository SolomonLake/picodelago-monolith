import React, { Component } from "react";
import { View, Button, Text, TextInput } from "react-native";
import { Plan } from "../../store/IStoreState";
import { planName, placeholderName } from "./planUiUtils";
import { PlanPageProps } from "./PlanPage";

export class PlanPageUI extends Component<PlanPageProps> {
  constructor(props: PlanPageProps) {
    super(props);

    this.changeName = this.changeName.bind(this);
  }

  render() {
    const plan = this.props.plans[this.props.openPlanId];
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
          placeholder={placeholderName}
          value={plan.name}
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
