import 'package:planet_plans/models/models.dart';
import 'ui_reducer.dart';
import 'plans_reducer.dart';

AppState appReducer(AppState state, action) {
  return AppState(
    uiReducer(state.ui, action),
    plansReducer(state.plans, action),
  );
}
