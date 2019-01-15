import 'package:meta/meta.dart';
import 'package:planet_plans/models/ui_state.dart';

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
// // I'M A SEXY LITTLE NOODLE
// enum AppPage { suggestionsPage, favoritesPage }

class AppState {
  final UIState ui;
  final Map<String, Plan> plans;

  AppState(this.ui, this.plans);
}

// times are in milliseconds
class Timer {
  final String id;
  final String name;
  final Map<String, Timer> times;
  final num currentTime;
  final TimerCategory category;

  Timer(this.id, this.name, this.times, this.currentTime, this.category);
}

enum TimerCategory { Work, Rest }

enum PlanStatus { active, paused, overview }

abstract class PlanState {
  static PlanStateStatus status;
}

enum PlanStateStatus { overview, active, paused }

class PlanOverviewState extends PlanState {
  static PlanStateStatus status = PlanStateStatus.overview;
}

class PlanActiveState extends PlanState {
  static PlanStateStatus status = PlanStateStatus.active;
  final String activeTimer;
  final num timestamp;

  PlanActiveState(this.activeTimer, this.timestamp);
}

class PlanPausedState extends PlanState {
  static PlanStateStatus status = PlanStateStatus.paused;
  final String activeTimer;

  PlanPausedState(this.activeTimer);
}

class Plan {
  final PlanState state;
  final String id;
  final String name;
  final Map<String, Timer> timers;

  Plan(this.state, this.id, this.name, this.timers);
}
