import 'package:redux/redux.dart';

import 'package:planet_plans/models/models.dart';
import 'package:planet_plans/actions/actions.dart';

final uiReducer = combineReducers<UIState>([
  TypedReducer<UIState, NavGoToPlansOverviewPageAction>(
      _navGoToPlansOverviewPageReducer),
  TypedReducer<UIState, PlansDeletePlanAction>(_plansDeletePlanReducer),
  TypedReducer<UIState, NavGoToPlanPageAction>(_navGoToPlanPageReducer),
  TypedReducer<UIState, PlansAddPlanAction>(_plansAddPlanReducer),
  TypedReducer<UIState, LoadStateGotLoadedStateAction>(
      _loadStateGotLoadedStateReducer),
]);

UIState _navGoToPlansOverviewPageReducer(
    UIState uiState, NavGoToPlansOverviewPageAction action) {
  return OverviewPageState();
}

UIState _plansDeletePlanReducer(UIState uiState, PlansDeletePlanAction action) {
  return OverviewPageState();
}

UIState _navGoToPlanPageReducer(UIState uiState, NavGoToPlanPageAction action) {
  return PlanPageState(action.planId);
}

UIState _plansAddPlanReducer(UIState uiState, PlansAddPlanAction action) {
  return PlanPageState(action.newPlan.id);
}

UIState _loadStateGotLoadedStateReducer(
    UIState uiState, LoadStateGotLoadedStateAction action) {
  return action.appState.ui;
}
