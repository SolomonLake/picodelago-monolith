import 'dart:collection';

import "package:planet_plans/actions/plans_actions.dart";
import 'package:planet_plans/models/models.dart';
import 'package:uuid/uuid.dart';

var uuid = new Uuid();

Plan defaultPlan() {
  String id = uuid.v1();
  return new Plan(
    PlanOverviewState(),
    id,
    "Untitled Plan",
    new LinkedHashMap(),
  );
}

Timer defaultTimer() {
  String id = uuid.v1();
  return new Timer(
      id, "Untitled Timer", TimerTimes(secs: 3), 0, TimerCategory.Work);
}

PlansAddPlanAction addPlan() {
  return PlansAddPlanAction(defaultPlan());
}

PlansUpdatePlanAction updatePlanName(String newName, Plan plan) {
  final Plan newPlan = Plan(plan.state, plan.id, newName, plan.timers);
  return PlansUpdatePlanAction(newPlan);
}

PlansUpdatePlanAction addTimer(Plan plan) {
  final Timer newTimer = defaultTimer();
  final Plan newPlan = Plan(plan.state, plan.id, plan.name,
      plan.timers..addAll({newTimer.id: newTimer}));
  return PlansUpdatePlanAction(newPlan);
}
