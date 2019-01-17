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

PlansAddPlanAction addPlan() {
  return PlansAddPlanAction(defaultPlan());
}
