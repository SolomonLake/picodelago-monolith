import 'package:planet_plans/models/models.dart';

class TimersUpdateTimerAction {
  final String planId;
  final Timer timer;

  TimersUpdateTimerAction(this.planId, this.timer);
}

// class TimersUpdateTimerNameAction {
//   final String planId;
//   final String timerId;
//   final String name;

//   TimersUpdateTimerNameAction(this.planId, this.timerId, this.name);
// }

// class TimersUpdateTimerTimesAction {
//   final String planId;
//   final String timerId;
//   final Map<String, Timer> times;

//   TimersUpdateTimerTimesAction(this.planId, this.timerId, this.times);
// }

// class TimersUpdateTimerCategoryAction {
//   final String planId;
//   final String timerId;
//   final TimerCategory category;

//   TimersUpdateTimerCategoryAction(this.planId, this.timerId, this.category);
// }
