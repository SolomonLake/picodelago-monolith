import { Timer, TimerMap } from "../../store/IStoreState";
import { mapObject } from "../../utils/objectUtils";

export const placeholderTimerName = "Untitled Timer";
export function timerName(timer: Timer) {
  return timer.name || placeholderTimerName;
}

export function resetTimer(timer: Timer): Timer {
  return {
    ...timer,
    currentTime: 0
  };
}

export function resetTimers(timers: TimerMap): TimerMap {
  return mapObject(timers, resetTimer);
}
