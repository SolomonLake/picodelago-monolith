import { Dispatch } from "redux";
import { IStoreState } from "../../store/IStoreState";
import {
  INavGoToPlanPageAction,
  INavGoToPlansOverviewPageAction
} from "./NavActionTypes";

export function gotToPlanPage(): INavGoToPlanPageAction {
  return {
    type: "NAV__GO_TO_PLAN__PAGE_ACTION"
  };
}
