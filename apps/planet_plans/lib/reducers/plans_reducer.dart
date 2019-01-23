import 'package:planet_plans/utils/map_utils.dart';
import 'package:planet_plans/utils/timer_ui_utils.dart';
import 'package:redux/redux.dart';

import 'package:planet_plans/models/models.dart';
import 'package:planet_plans/actions/actions.dart';

final plansReducer = combineReducers<Map<String, Plan>>([
  TypedReducer<Map<String, Plan>, PlansAddPlanAction>(_plansAddPlanReducer),
  TypedReducer<Map<String, Plan>, PlansDeletePlanAction>(
      _plansDeletePlanReducer),
  TypedReducer<Map<String, Plan>, PlansUpdatePlanAction>(
      _plansUpdatePlanReducer),
  TypedReducer<Map<String, Plan>, TimersUpdateTimerAction>(
      _timersUpdateTimerReducer),
  TypedReducer<Map<String, Plan>, GlobalTickTockAction>(_globalTickTockReducer),
  TypedReducer<Map<String, Plan>, LoadStateGotLoadedStateAction>(
      _loadStateGotLoadedStateReducer),
]);

Map<String, Plan> _plansAddPlanReducer(
    Map<String, Plan> plans, PlansAddPlanAction action) {
  return plans..addAll({action.newPlan.id: action.newPlan});
}

Map<String, Plan> _plansDeletePlanReducer(
    Map<String, Plan> plans, PlansDeletePlanAction action) {
  return plans..remove(action.planId);
}

Map<String, Plan> _plansUpdatePlanReducer(
    Map<String, Plan> plans, PlansUpdatePlanAction action) {
  return plans
    ..update(action.plan.id, (Plan plan) {
      return action.plan;
    });
}

Map<String, Plan> _timersUpdateTimerReducer(
    Map<String, Plan> plans, TimersUpdateTimerAction action) {
  return plans
    ..update(action.planId, (Plan plan) {
      final Map<String, Timer> timers = plan.timers
        ..update(action.timer.id, (Timer timer) {
          return action.timer;
        });
      return Plan(plan.state, plan.id, plan.name, timers);
    });
}

Map<String, Plan> _globalTickTockReducer(
    Map<String, Plan> plans, GlobalTickTockAction action) {
  return plans.map((String planId, Plan plan) {
    switch (plan.state.status) {
      case PlanStateStatus.overview:
      case PlanStateStatus.paused:
        return MapEntry(planId, plan);
      case PlanStateStatus.active:
        if (plan.state is PlanActiveState) {
          return _processActivePlan(plan, plan.state);
        } else {
          throw new Error();
        }
    }
  });
}

MapEntry<String, Plan> _processActivePlan(
    Plan plan, PlanActiveState planState) {
  final activeTimerId = planState.activeTimer;
  final activeTimer = plan.timers[activeTimerId];
  final newTimestamp = DateTime.now();
  final int currentTime = activeTimer.currentTime +
      (newTimestamp.difference(planState.timestamp).inMilliseconds);
  final int totalMilliseconds = activeTimer.times.toDuration().inMilliseconds;
  final timeIsUp = currentTime >= totalMilliseconds;
  final newCurrentTime = timeIsUp ? totalMilliseconds : currentTime;
  final newTimer = new Timer(activeTimer.id, activeTimer.name,
      activeTimer.times, newCurrentTime, activeTimer.category);

  final newTimers = plan.timers
    ..update(newTimer.id, (timer) {
      return newTimer;
    });

  if (timeIsUp) {
    final indexOfActiveTimer = indexInMap(newTimers, activeTimerId);
    final nextTimerExists = indexOfActiveTimer + 1 < newTimers.keys.length;
    if (nextTimerExists) {
      final nextTimerId =
          elementAtIndexInMap(newTimers, indexOfActiveTimer + 1).key;
      final newState = new PlanActiveState(nextTimerId, newTimestamp);
      return MapEntry(
          plan.id, new Plan(newState, plan.id, plan.name, newTimers));
    } else {
      // plan is done
      Plan newPlan = new Plan(
          PlanOverviewState(), plan.id, plan.name, resetTimers(plan.timers));
      // notificationApi.notifyPlanIsDone(plan);
      return MapEntry(plan.id, newPlan);
    }
  } else {
    final newState = new PlanActiveState(planState.activeTimer, newTimestamp);
    return MapEntry(plan.id, new Plan(newState, plan.id, plan.name, newTimers));
  }
}

Map<String, Plan> _loadStateGotLoadedStateReducer(
    Map<String, Plan> plans, LoadStateGotLoadedStateAction action) {
  return action.appState.plans;
}
