import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { TimerComponentProps } from "./TimerComponent";
import { placeholderTimerName } from "./timerUiUtils";

export class TimerComponentUI extends Component<TimerComponentProps> {
  constructor(props: TimerComponentProps) {
    super(props);
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
        <TextInput
          defaultValue={JSON.stringify(this.props.timer.times.hrs)}
          onSubmitEditing={e => {
            const hrs = parseInt(e.nativeEvent.text);
            const newTT = {
              ...this.props.timer.times,
              hrs
            };
            this.props.changeTimerTimes(
              newTT,
              this.props.timer.id,
              this.props.plan.id
            );
          }}
          keyboardType="numeric"
        />
        {/* Minutes */}
        <TextInput
          defaultValue={JSON.stringify(this.props.timer.times.mins)}
          onSubmitEditing={e => {
            const mins = parseInt(e.nativeEvent.text);
            const newTT = {
              ...this.props.timer.times,
              mins
            };
            this.props.changeTimerTimes(
              newTT,
              this.props.timer.id,
              this.props.plan.id
            );
          }}
          keyboardType="numeric"
        />
        {/* Seconds */}
        <TextInput
          defaultValue={JSON.stringify(this.props.timer.times.secs)}
          onSubmitEditing={e => {
            const secs = parseInt(e.nativeEvent.text);
            const newTT = {
              ...this.props.timer.times,
              secs
            };
            this.props.changeTimerTimes(
              newTT,
              this.props.timer.id,
              this.props.plan.id
            );
          }}
          keyboardType="numeric"
        />
      </View>
    );
  }
}
