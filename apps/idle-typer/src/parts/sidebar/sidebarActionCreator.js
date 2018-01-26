/* @flow */

import { dispatch } from "./sidebarActions";

import { sidebarStore } from "./sidebarStore";

import { googleServerApi } from "../../shared/googleServerApi";

class SidebarActionCreator {
  switchToMainView() {
    dispatch({
      type: "SIDEBAR__CHANGE_VIEW_REQUESTED",
      view: "main"
    });
  }

  setIsWorking(isWorking: boolean) {
    dispatch({
      type: "SIDEBAR__SET_IS_WORKING_REQUESTED",
      isWorking: isWorking
    });
  }

  toggleShowGameState() {
    dispatch({
      type: "SIDEBAR__TOGGLE_SHOW_GAME_STATE_REQUESTED"
    });
  }

  openSidebar() {
    googleServerApi.openSidebar();
  }
}

export const sidebarActionCreator = new SidebarActionCreator();
