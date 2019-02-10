import 'package:planet_plans/state/state.dart';
import 'ui_reducer.dart';
import 'plans_reducer.dart';

AppState appReducer(AppState state, action) {
  return AppState(
    uiReducer(state.ui, action),
    plansReducer(state.plans, action),
  );
}
