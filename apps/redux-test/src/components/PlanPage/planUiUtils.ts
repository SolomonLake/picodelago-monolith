import { Plan } from "../../store/IStoreState";

export function planName(plan: Plan) {
  return plan.name || "Untitled Plan";
}
