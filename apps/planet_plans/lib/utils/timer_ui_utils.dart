import 'package:planet_plans/state/state.dart';

Map<String, Timer> resetTimers(Map<String, Timer> timers) {
  return timers.map((key, timer) {
    final newTimer =
        new Timer(timer.id, timer.name, timer.times, 0, timer.category);
    return MapEntry(key, newTimer);
  });
}

String timeTypeToString(TimeType timerType) {
  switch (timerType) {
    case TimeType.hours:
      return "Hours";
    case TimeType.minutes:
      return "Mins";
    case TimeType.seconds:
      return "Secs";
  }
  return "";
}
