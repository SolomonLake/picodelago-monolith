import React, { Component } from "react";
import { Button, TextInput, View, Text } from "react-native";

import { Plan } from "../../store/IStoreState";
import { mapObject, toArray } from "../../utils/objectUtils";
import { PlanPageProps } from "./PlanPage";
import { placeholderPlanName, displayTime, displayTimeMs } from "./planUiUtils";
import { TimerComponent } from "../Timer/TimerComponent";
import { PlanPageStyles } from "./PlanPage.styles";
import { Button_Text } from "../GenericComponents/Button_Text";

export class PlanPageUI extends Component<PlanPageProps> {
  constructor(props: PlanPageProps) {
    super(props);

    this.PlanPageBody = this.PlanPageBody.bind(this);
    this.PlanPageHeader = this.PlanPageHeader.bind(this);
    this.StartPlanButton = this.StartPlanButton.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  render() {
    return (
      <View>
        <this.PlanPageHeader />

        <this.PlanPageBody />
      </View>
    );
  }

  PlanPageBody() {
    switch (this.props.plan.state.status) {
      case "overview":
        return (
          <View>
            <Button
              onPress={this.props.addTimerFn(this.props.plan)}
              color="#DE5448"
              title="+ Timer"
            />
            {TimersList(this.props.plan)}
            <Button_Text
              text="Delete Plan"
              onPress={this.props.deletePlanFn(this.props.plan.id)}
              styles={{
                text: { color: "#FFFFFF", fontSize: 20 }
              }}
            />
          </View>
        );
      case "active":
        return (
          <View>
            <Button
              onPress={this.props.pausePlanFn(
                this.props.plan.id,
                this.props.plan.state.activeTimer
              )}
              color="#DE5448"
              title="Pause"
            />
            {ActiveTimersList(
              this.props.plan,
              this.props.plan.state.activeTimer
            )}
          </View>
        );
      case "paused":
        return (
          <View>
            <Button
              onPress={this.props.startPlanFn(
                this.props.plan.id,
                this.props.plan.state.activeTimer
              )}
              color="#DE5448"
              title="Resume"
            />
            {ActiveTimersList(
              this.props.plan,
              this.props.plan.state.activeTimer
            )}
          </View>
        );
    }
  }

  PlanPageHeader() {
    return (
      <View style={PlanPageStyles.plan_page_header}>
        <Button_Text
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
        <this.StartPlanButton />
      </View>
    );
  }

  StartPlanButton() {
    switch (this.props.plan.state.status) {
      case "overview":
        const firstTimer = toArray(this.props.plan.timers)[0];
        return !!firstTimer ? (
          <Button_Text
            text="Start"
            onPress={this.props.startPlanFn(this.props.plan.id, firstTimer.id)}
            disabled={false}
            styles={{
              text: { color: "#FFFFFF", fontSize: 15 }
            }}
          />
        ) : (
          <Button_Text
            text="_Start_"
            onPress={() => {}}
            disabled={true}
            styles={{
              text: { color: "#FFFFFF", fontSize: 15 }
            }}
          />
        );
      case "active":
      case "paused":
        return (
          <Button_Text
            text="End"
            onPress={this.props.endPlanFn(this.props.plan.id)}
            styles={{
              text: { color: "#FFFFFF", fontSize: 15 }
            }}
          />
        );
    }
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

const ActiveTimersList = (plan: Plan, activeTimer: string) => {
  return toArray(
    mapObject(plan.timers, (timer, _) => {
      switch (timer.id === activeTimer) {
        case true:
          return (
            <View key={timer.id}>
              <Text>{timer.name}</Text>
              <View style={PlanPageStyles.active.inactive_timer}>
                <Text>{displayTimeMs(timer.currentTime) + " / "}</Text>
                <Text>{displayTime(timer.times)}</Text>
              </View>
            </View>
          );
        case false:
          return (
            <View key={timer.id}>
              <Text>{timer.name}</Text>
              <View style={PlanPageStyles.active.inactive_timer}>
                <Text>{displayTimeMs(timer.currentTime) + " / "}</Text>
                <Text>{displayTime(timer.times)}</Text>
              </View>
            </View>
          );
      }
    })
  );
};
