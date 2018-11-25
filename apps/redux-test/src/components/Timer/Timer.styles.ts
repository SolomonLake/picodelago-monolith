import { ViewStyle, TextStyle } from "react-native";

const time_row: ViewStyle = {
  flexDirection: "row",
  alignItems: "baseline"
};

const time_input: TextStyle = {
  fontSize: 20,
  textAlign: "right",
  paddingBottom: 4
};

export const TimerStyles = {
  time_row,
  time_input,
  time_text: {
    fontSize: 20,
    paddingRight: 20,
    paddingBottom: 4
  }
};
