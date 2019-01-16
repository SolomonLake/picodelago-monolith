import 'package:planet_plans/models/models.dart';

Map<String, Timer> resetTimers(Map<String, Timer> timers) {
  return timers.map((key, timer) {
    final newTimer =
        new Timer(timer.id, timer.name, timer.totalTime, 0, timer.category);
    return MapEntry(key, newTimer);
  });
}
