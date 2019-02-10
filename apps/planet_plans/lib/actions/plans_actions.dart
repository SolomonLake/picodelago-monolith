import 'package:planet_plans/state/state.dart';

class PlansAddPlanAction {
  final Plan newPlan;

  PlansAddPlanAction(this.newPlan);
}

class PlansDeletePlanAction {
  final String planId;

  PlansDeletePlanAction(this.planId);
}

class PlansUpdatePlanAction {
  final Plan plan;

  PlansUpdatePlanAction(this.plan);
}

// class PlansUpdatePlanNameAction {
//   final String planId;
//   final String name;

//   PlansUpdatePlanNameAction(this.planId, this.name);
// }

// class PlansUpdatePlanStateAction {
//   final String planId;
//   final PlanState state;

//   PlansUpdatePlanStateAction(this.planId, this.state);
// }

// class PlansUpdatePlanTimersAction {
//   final String planId;
//   final Map<String, Timer> timers;

//   PlansUpdatePlanTimersAction(this.planId, this.timers);
// }
