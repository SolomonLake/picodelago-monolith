/* @flow */

import appDispatcher from "../../shared/flux/AppDispatcher";

import type { SidebarView } from "./sidebarTypes";
import { sidebarStore } from "./sidebarStore";

import { sidebarEffects } from "./sidebarEffects";

type sidebarChangeViewAction = {
  type: "SIDEBAR__CHANGE_VIEW_REQUESTED",
  view: SidebarView
};

type sidebarSetCurrentDocumentStringAction = {
  type: "SIDEBAR__SET_CURRENT_DOCUMENT_STRING_REQUESTED",
  currentDocumentString: string
};

type sidebarSetIsWorkingAction = {
  type: "SIDEBAR__SET_IS_WORKING_REQUESTED",
  isWorking: boolean
};

export type SidebarAction =
  | sidebarChangeViewAction
  | sidebarSetCurrentDocumentStringAction
  | sidebarSetIsWorkingAction;

export function dispatch(action: SidebarAction) {
  const prevState = sidebarStore.getState();
  appDispatcher.dispatch(action);
  sidebarEffects(sidebarStore.getState(), prevState);
}
