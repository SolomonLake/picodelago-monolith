import { ONE_HOUR, ONE_MINUTE, ONE_SECOND } from "../../utils/unitsOfTime";

export type TimerTimes = {
  hrs: number;
  mins: number;
  secs: number;
  ms: number;
};

export type Milliseconds = number;

export function msToTimerTimes(ms: Milliseconds): TimerTimes {
  const hrs = Math.floor(ms / ONE_HOUR);
  const minsRemaining = ms % ONE_HOUR;

  const mins = Math.floor(minsRemaining / ONE_MINUTE);
  const secsRemaining = minsRemaining % ONE_MINUTE;

  const secs = Math.floor(secsRemaining / ONE_SECOND);
  const msRemaining = secsRemaining % ONE_SECOND;

  return {
    hrs,
    mins,
    secs,
    ms: msRemaining
  };
}

export function timerTimesToMs({
  hrs,
  mins,
  secs,
  ms
}: TimerTimes): Milliseconds {
  return hrs * ONE_HOUR + mins * ONE_MINUTE + secs * ONE_SECOND + ms;
}
