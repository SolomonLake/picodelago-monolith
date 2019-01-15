abstract class UIState {
  static Page page;
}

class OverviewPageState extends UIState {
  static Page page = Page.plansOverview;
}

class PlanPageState extends UIState {
  static Page page = Page.plan;

  final String openPlanId;

  PlanPageState(this.openPlanId);
}

enum Page { plansOverview, plan }
