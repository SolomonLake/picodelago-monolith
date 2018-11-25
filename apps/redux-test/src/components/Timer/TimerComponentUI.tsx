import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import { TimerComponentProps } from "./TimerComponent";
import { placeholderTimerName } from "./timerUiUtils";
import { TimerTimes } from "./timerUtils";
import { TimerStyles } from "./Timer.styles";

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
        <View style={TimerStyles.time_row}>
          <TimeInputUI
            defaultValue={this.props.timer.times.hrs}
            timeCallback={(time: number) => {
              const hrs = { hrs: time };
              this.updateTimerTimes(hrs);
            }}
          />
          <Text style={TimerStyles.time_text}>h</Text>
          {/* Minutes */}
          <TimeInputUI
            defaultValue={this.props.timer.times.mins}
            timeCallback={(time: number) => {
              const mins = { mins: time };
              this.updateTimerTimes(mins);
            }}
          />
          <Text style={TimerStyles.time_text}>m</Text>
          {/* Seconds */}
          <TimeInputUI
            defaultValue={this.props.timer.times.secs}
            timeCallback={(time: number) => {
              const secs = { secs: time };
              this.updateTimerTimes(secs);
            }}
          />
          <Text style={TimerStyles.time_text}>s</Text>
        </View>
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
      style={TimerStyles.time_input}
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
