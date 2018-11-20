import { Plan } from "../../store/IStoreState";

export const placeholderPlanName = "Untitled Plan";
export function planName(plan: Plan) {
  return plan.name || placeholderPlanName;
}
