import React from "react";
import {
  TouchableHighlight,
  GestureResponderEvent,
  Text,
  TextStyle,
  ViewStyle
} from "react-native";
import { RED } from "../Global.styles";

export const Button_Text = (props: {
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
    <TouchableHighlight
      onPress={props.onPress}
      style={buttonStyles.button}
      disabled={props.disabled}
    >
      {/* todo: add disabled state */}
      <Text style={buttonStyles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
};

const defaultStyles = {
  button: {
    backgroundColor: RED
  },
  text: {
    backgroundColor: RED
  }
};
