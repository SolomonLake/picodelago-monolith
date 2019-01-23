import 'package:planet_plans/models/models.dart';
import "package:planet_plans/actions/plans_actions.dart";

PlansUpdatePlanAction updateTimerTimes(
    Plan plan, Timer timer, TimerTimes newTimerTimes) {
  final Timer newTimer = Timer(
      timer.id, timer.name, newTimerTimes, timer.currentTime, timer.category);
  final newTimers = plan.timers..update(timer.id, (_) => newTimer);
  final Plan newPlan = Plan(plan.state, plan.id, plan.name, newTimers);
  return PlansUpdatePlanAction(newPlan);
}
