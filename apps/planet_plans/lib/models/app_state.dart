import 'dart:collection';

import 'package:planet_plans/actionCreators/plans_action_creator.dart';
import 'package:planet_plans/models/ui_state.dart';

// // I'M A SEXY LITTLE NOODLE

class AppState {
  final UIState ui;
  final LinkedHashMap<String, Plan> plans;

  static AppState initialState() {
    final plan = defaultPlan();
    return AppState(OverviewPageState(), LinkedHashMap.from({plan.id: plan}));
  }

  AppState(this.ui, this.plans);
}

// times are in milliseconds
class Timer {
  final String id;
  final String name;
  final TimerTimes times;
  final int currentTime;
  final TimerCategory category;

  Timer(this.id, this.name, this.times, this.currentTime, this.category);
}

class TimerTimes {
  final int hrs;
  final int mins;
  final int secs;
  final int ms;

  Duration toDuration() {
    return Duration(
        hours: this.hrs,
        minutes: this.mins,
        seconds: this.secs,
        milliseconds: this.ms);
  }

  const TimerTimes({
    this.hrs: 0,
    this.mins: 0,
    this.secs: 0,
    this.ms: 0,
  });
}

enum TimeType { seconds, minutes, hours }

enum TimerCategory { Work, Rest }

enum PlanStatus { active, paused, overview }

abstract class PlanState {
  PlanStateStatus status;
}

enum PlanStateStatus { overview, active, paused }

class PlanOverviewState extends PlanState {
  final PlanStateStatus status = PlanStateStatus.overview;
}

class PlanActiveState extends PlanState {
  final PlanStateStatus status = PlanStateStatus.active;
  final String activeTimer;
  final DateTime timestamp;

  PlanActiveState(this.activeTimer, this.timestamp);
}

class PlanPausedState extends PlanState {
  final PlanStateStatus status = PlanStateStatus.paused;
  final String activeTimer;

  PlanPausedState(this.activeTimer);
}

class Plan {
  final PlanState state;
  final String id;
  final String name;
  final LinkedHashMap<String, Timer> timers;

  Plan(this.state, this.id, this.name, this.timers);
}

// @immutable
// class AppState {
//   final AppPage activePage;
//   final List<WordPair> suggestions;
//   final List<WordPair> saved;

//   AppState({
//     this.activePage = AppPage.suggestionsPage,
//     this.suggestions = const [],
//     this.saved = const [],
//   });
// }
