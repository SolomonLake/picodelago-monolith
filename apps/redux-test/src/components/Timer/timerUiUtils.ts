import { Timer } from "../../store/IStoreState";

export const placeholderTimerName = "Untitled Timer";
export function timerName(timer: Timer) {
  return timer.name || placeholderTimerName;
}

// src: https://coderwall.com/p/wkdefg/converting-milliseconds-to-hh-mm-ss-mmm
// function msToTime(duration: number) {
//   var milliseconds = (duration % 1000) / 100,
//     seconds = (duration / 1000) % 60,
//     minutes = (duration / (1000 * 60)) % 60,
//     hours = (duration / (1000 * 60 * 60)) % 24;

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }
