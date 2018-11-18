import { Page } from "../../store/IStoreState";
import { NavGoToPageAction } from "./NavAction";

class NavActionCreator {
  goToPage(page: Page): NavGoToPageAction {
    return {
      type: "NAV__GO_TO_PAGE_ACTION",
      page
    };
  }

  goToPlanPage(): NavGoToPageAction {
    return this.goToPage("Plan");
  }

  goToPlansOverviewPage(): NavGoToPageAction {
    return this.goToPage("PlansOverview");
  }
}

export const navActionCreator = new NavActionCreator();
