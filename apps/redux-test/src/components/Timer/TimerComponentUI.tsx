import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { TimerComponentProps } from "./TimerComponent";
import { placeholderTimerName } from "./timerUiUtils";
import { TimerTimes } from "./timerUtils";

export class TimerComponentUI extends Component<TimerComponentProps> {
  constructor(props: TimerComponentProps) {
    super(props);

    this.updateTimerTimes.bind(this);
  }

  render() {
    return (
      <View>
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
        {/* Hours */}
        <TimeInputUI
          defaultValue={this.props.timer.times.hrs}
          timeCallback={(time: number) => {
            const hrs = { hrs: time };
            this.updateTimerTimes(hrs);
          }}
        />
        {/* Minutes */}
        <TimeInputUI
          defaultValue={this.props.timer.times.mins}
          timeCallback={(time: number) => {
            const mins = { mins: time };
            this.updateTimerTimes(mins);
          }}
        />
        {/* Seconds */}
        <TimeInputUI
          defaultValue={this.props.timer.times.secs}
          timeCallback={(time: number) => {
            const secs = { secs: time };
            this.updateTimerTimes(secs);
          }}
        />
      </View>
    );
  }

  updateTimerTimes(newTime: Partial<TimerTimes>) {
    const newTT = {
      ...this.props.timer.times,
      ...newTime
    };
    this.props.changeTimerTimes(newTT, this.props.timer.id, this.props.plan.id);
  }
}

const TimeInputUI = (props: {
  defaultValue: number;
  timeCallback: (time: number) => void;
}) => {
  return (
    <TextInput
      defaultValue={JSON.stringify(props.defaultValue)}
      onChange={e => {
        props.timeCallback(parseInt(e.nativeEvent.text) || 0);
      }}
      keyboardType="numeric"
      maxLength={2}
      selectTextOnFocus={true}
    />
  );
};
