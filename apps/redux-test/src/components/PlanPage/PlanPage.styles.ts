import { ViewStyle } from "react-native";
import { GlobalStyles, RED } from "../Global.styles";

const plan_page_header: ViewStyle = {
  flexDirection: "row",
  minHeight: 40
};

export const PlanPageStyles = {
  plan_page_header,
  plan_name_input: {
    ...GlobalStyles.text_input,
    flexGrow: 1
  },
  back_to_plans_overview_button: { backgroundColor: RED }
};
