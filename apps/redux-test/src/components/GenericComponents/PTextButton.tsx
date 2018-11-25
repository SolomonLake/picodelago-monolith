import React from "react";
import {
  TouchableHighlight,
  GestureResponderEvent,
  Text,
  TextStyle,
  ViewStyle,
  AppRegistry
} from "react-native";
import { RED } from "../Global.styles";

export const PTextButton = (props: {
  text: string;
  onPress: (e?: GestureResponderEvent) => void;
  styles?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
}) => {
  const buttonStyles = {
    ...defaultStyles,
    ...(props.styles || {})
  };
  return (
    <TouchableHighlight onPress={props.onPress} style={buttonStyles.button}>
      <Text style={buttonStyles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
};

AppRegistry.registerComponent("PTextButton", () => PTextButton);

const defaultStyles = {
  button: {
    backgroundColor: RED
  },
  text: {
    backgroundColor: RED
  }
};
