import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:planet_plans/models/models.dart';
import 'package:planet_plans/views/plan_page/plan_page.dart';
import 'package:planet_plans/views/plans_overview_page.dart';
import 'package:redux/redux.dart';

class MainView extends StatelessWidget {
  final Store<AppState> store;

  MainView(this.store);

  @override
  Widget build(BuildContext context) {
    return new StoreConnector<AppState, AppState>(
        converter: (store) => store.state,
        builder: (context, callback) {
          final uiState = this.store.state.ui;
          switch (uiState.page) {
            case Page.plansOverview:
              return PlansOverviewPage(this.store);
            case Page.plan:
              if (uiState is PlanPageState) {
                final Plan openPlan =
                    this.store.state.plans[uiState.openPlanId];
                return PlanPage(this.store, openPlan);
              }
              throw ("");

            case Page.settings:
              return PlansOverviewPage(this.store);
          }
        });
  }
}
