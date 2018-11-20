import * as React from "react";
import { Timer } from "../../store/IStoreState";
import { timerName } from "./timerUiUtils";
import { Text } from "react-native";

interface TimerComponentProps {
  timer: Timer;
}

export const TimerComponent: React.SFC<TimerComponentProps> = props => {
  return <Text>{timerName(props.timer)}</Text>;
};
