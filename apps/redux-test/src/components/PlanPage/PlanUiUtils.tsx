import { Plan } from "../../store/IStoreState";
import { Text } from "react-native";
import React from "react";

export function planName(plan: Plan) {
  return plan.name || "Untitled Plan";
}
