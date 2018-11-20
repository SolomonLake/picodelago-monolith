import { Timer } from "../../store/IStoreState";

export const placeholderTimerName = "Untitled Timer";
export function timerName(timer: Timer) {
  return timer.name || placeholderTimerName;
}
