/* @flow */

import appDispatcher from "../../shared/flux/AppDispatcher";

import type { SidebarView } from "./sidebarTypes";
import { sidebarStore } from "./sidebarStore";

import { sidebarEffects } from "./sidebarEffects";

type sidebarChangeViewAction = {
  type: "SIDEBAR__CHANGE_VIEW_REQUESTED",
  view: SidebarView
};

type sidebarSetIsWorkingAction = {
  type: "SIDEBAR__SET_IS_WORKING_REQUESTED",
  isWorking: boolean
};

type sidebarToggleShowGameStateAction = {
  type: "SIDEBAR__TOGGLE_SHOW_GAME_STATE_REQUESTED"
};

export type SidebarAction =
  | sidebarChangeViewAction
  | sidebarSetIsWorkingAction
  | sidebarToggleShowGameStateAction;

export function dispatch(action: SidebarAction) {
  const prevState = sidebarStore.getState();
  appDispatcher.dispatch(action);
  sidebarEffects(sidebarStore.getState(), prevState);
}
