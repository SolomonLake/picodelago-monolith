import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";

import { Plan, TimerMap } from "../../store/IStoreState";
import { mapObject, toArray } from "../../utils/utils";
import { PlanPageProps } from "./PlanPage";
import { placeholderName } from "./planUiUtils";

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
        <TextInput
          placeholder={placeholderName}
          value={plan.name}
          onChangeText={this.changeName(plan)}
        />
        <Button onPress={this.props.addTimer} color="#DE5448" title="+ Timer" />
        {TimersList(plan.timers)}
      </View>
    );
  }

  changeName(plan: Plan) {
    return (name: string) => {
      this.props.changePlanName(name, plan.id);
    };
  }
}

const TimersList = (timers: TimerMap) =>
  toArray(
    mapObject(timers, (timer, _) => {
      // return <Timer />;
      return <View />;
    })
  );
