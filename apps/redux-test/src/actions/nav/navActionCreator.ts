import { Plan } from "../../store/IStoreState";
import {
  NavGoToPlanPageAction,
  NavGoToPlansOverviewPageAction
} from "./NavAction";

class NavActionCreator {
  goToPlanPage(plan: Plan): NavGoToPlanPageAction {
    return {
      type: "NAV__GO_TO_PLAN_PAGE_ACTION",
      plan
    };
  }

  goToPlansOverviewPage(): NavGoToPlansOverviewPageAction {
    return {
      type: "NAV__GO_TO_PLANS_OVERVIEW_PAGE_ACTION"
    };
  }
}

export const navActionCreator = new NavActionCreator();
