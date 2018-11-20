import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import { TimerComponentProps } from "./TimerComponent";
import { placeholderTimerName, timerName } from "./timerUiUtils";

export class TimerComponentUI extends Component<TimerComponentProps> {
  constructor(props: TimerComponentProps) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>{timerName(this.props.timer)}</Text>
        <TextInput
          placeholder={placeholderTimerName}
          value={this.props.timer.name}
          onChangeText={name => {
            this.props.changeTimerName(
              name,
              this.props.timer.id,
              this.props.plan.id
            );
          }}
        />
        <TextInput
          value={JSON.stringify(this.props.timer.totalTime)}
          onChangeText={totalTimeStr => {
            const totalTime = parseInt(totalTimeStr);
            this.props.changeTimerTotalTime(
              totalTime,
              this.props.timer.id,
              this.props.plan.id
            );
          }}
        />
      </View>
    );
  }
}
