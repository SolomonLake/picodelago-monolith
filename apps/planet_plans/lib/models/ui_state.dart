abstract class UIState {
  final Page page;

  UIState(this.page);
}

class OverviewPageState implements UIState {
  final Page page = Page.plansOverview;

  OverviewPageState();
}

class PlanPageState implements UIState {
  final Page page = Page.plan;
  final String openPlanId;

  PlanPageState(this.openPlanId);
}

enum Page { plansOverview, plan }
