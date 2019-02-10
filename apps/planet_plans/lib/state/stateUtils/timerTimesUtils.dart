import 'package:planet_plans/state/state.dart';

TimerTimes updateHrs(int newHrs, TimerTimes oldTimes) {
  return TimerTimes(
      hrs: newHrs, mins: oldTimes.mins, secs: oldTimes.secs, ms: oldTimes.ms);
}

TimerTimes updateMins(int newMins, TimerTimes oldTimes) {
  return TimerTimes(
      hrs: oldTimes.hrs, mins: newMins, secs: oldTimes.secs, ms: oldTimes.ms);
}

TimerTimes updateSecs(int newSecs, TimerTimes oldTimes) {
  return TimerTimes(
      hrs: oldTimes.hrs, mins: oldTimes.mins, secs: newSecs, ms: oldTimes.ms);
}

TimerTimes updateMs(int newMs, TimerTimes oldTimes) {
  return TimerTimes(
      hrs: oldTimes.hrs, mins: oldTimes.mins, secs: oldTimes.secs, ms: newMs);
}
