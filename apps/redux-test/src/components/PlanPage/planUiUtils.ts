import { Plan } from "../../store/IStoreState";

export const placeholderName = "Untitled Plan";
export function planName(plan: Plan) {
  return plan.name || placeholderName;
}
