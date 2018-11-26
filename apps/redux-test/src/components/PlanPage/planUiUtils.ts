import { Plan } from "../../store/IStoreState";
import { TimerTimes, msToTimerTimes } from "../Timer/timerUtils";

export const placeholderPlanName = "Untitled Plan";
export function planName(plan: Plan) {
  return plan.name || placeholderPlanName;
}

export function displayTimeMs(ms: number) {
  const times = msToTimerTimes(ms);
  return displayTime(times);
}

// src: https://coderwall.com/p/wkdefg/converting-milliseconds-to-hh-mm-ss-mmm
export function displayTime(times: TimerTimes) {
  const hrs = times.hrs ? times.hrs + "h:" : "";
  const mins = times.mins ? times.mins + "m:" : "";
  const secs = times.secs ? times.secs + "s ." : "";
  const ms = times.ms ? times.ms : "";

  const total = `${hrs}${mins}${secs}${ms}` || "0s";

  return total;
}
