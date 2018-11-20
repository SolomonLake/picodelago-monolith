import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";

import { TimerMap, Plan } from "../../store/IStoreState";
import { mapObject, toArray } from "../../utils/utils";
import { PlanPageProps } from "./PlanPage";
import { placeholderPlanName } from "./planUiUtils";
import { TimerComponent } from "../Timer/TimerComponent";

export class PlanPageUI extends Component<PlanPageProps> {
  constructor(props: PlanPageProps) {
    super(props);

    this.changeName = this.changeName.bind(this);
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
        <TextInput
          placeholder={placeholderPlanName}
          value={this.props.plan.name}
          onChangeText={this.changeName}
        />
        <Button
          onPress={this.props.addTimerFn(this.props.plan)}
          color="#DE5448"
          title="+ Timer"
        />
        {TimersList(this.props.plan)}
      </View>
    );
  }

  changeName(name: string) {
    this.props.changePlanName(name, this.props.plan.id);
  }
}

const TimersList = (plan: Plan) =>
  toArray(
    mapObject(plan.timers, (timer, _) => {
      return (
        <View key={timer.id}>
          <TimerComponent timer={timer} plan={plan} />
        </View>
      );
    })
  );
