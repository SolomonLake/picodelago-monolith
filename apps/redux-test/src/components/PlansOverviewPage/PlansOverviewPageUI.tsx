import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { Plan } from "../../store/IStoreState";

interface IPlansOverviewPageProps {
  plans: Array<Plan>;
  goToPlanPage: () => Promise<void>;
  addPlan: () => Promise<void>;
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
        <Button onPress={this.props.addPlan} color="#DE5448" title="New Plan" />
        {PlansList(this.props.plans, this.props.goToPlanPage)}
      </View>
    );
  }
}

const PlansList = (plans: Array<Plan>, goToPlanPage: () => void) =>
  plans.map(function(plan) {
    const name = plan.name || "Untitled Plan";
    return (
      <View key={plan.id}>
        <Button onPress={goToPlanPage} color="#DE5448" title={name} />
      </View>
    );
  });
