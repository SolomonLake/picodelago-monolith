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

export const PButton_Text = (props: {
  text: string;
  onPress: (e?: GestureResponderEvent) => void;
  disabled?: boolean;
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

AppRegistry.registerComponent("PTextButton", () => PButton_Text);

const defaultStyles = {
  button: {
    backgroundColor: RED
  },
  text: {
    backgroundColor: RED
  }
};