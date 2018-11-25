import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";

import { Plan } from "../../store/IStoreState";
import { mapObject, toArray } from "../../utils/utils";
import { PlanPageProps } from "./PlanPage";
import { placeholderPlanName } from "./planUiUtils";
import { TimerComponent } from "../Timer/TimerComponent";
import { PlanPageStyles } from "./PlanPage.styles";
import { PTextButton } from "../GenericComponents/PTextButton";

export class PlanPageUI extends Component<PlanPageProps> {
  constructor(props: PlanPageProps) {
    super(props);

    this.PlanPageHeader = this.PlanPageHeader.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  render() {
    return (
      <View>
        <this.PlanPageHeader />

        <Button
          onPress={this.props.addTimerFn(this.props.plan)}
          color="#DE5448"
          title="+ Timer"
        />
        {TimersList(this.props.plan)}
      </View>
    );
  }

  PlanPageHeader() {
    return (
      <View style={PlanPageStyles.plan_page_header}>
        <PTextButton
          text="<"
          onPress={this.props.goToPlansOverviewPage}
          styles={{
            text: { color: "#FFFFFF", fontSize: 20, paddingHorizontal: 20 }
          }}
        />
        <TextInput
          style={PlanPageStyles.plan_name_input}
          placeholder={placeholderPlanName}
          value={this.props.plan.name}
          onChangeText={this.changeName}
        />
        <PTextButton
          text="Start"
          onPress={this.props.goToPlansOverviewPage}
          styles={{
            text: { color: "#FFFFFF", fontSize: 15 }
          }}
        />
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
