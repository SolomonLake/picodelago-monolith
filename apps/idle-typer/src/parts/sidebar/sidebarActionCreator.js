/* @flow */

import { dispatch } from "./sidebarActions";

import { sidebarStore } from "./sidebarStore";

import { handleAppscriptError } from "../../shared/actionCreatorServerHelper";

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

  openSidebar() {
    google.script.run
      .withSuccessHandler(() => {
        console.log("sidebar reopened");
      })
      .withFailureHandler(e => {
        handleAppscriptError(e);
      })
      .openSidebar();
  }
}

export const sidebarActionCreator = new SidebarActionCreator();

function sidebarHandleAppscriptResponse(response: ServerResponse): void {
  switch (response.type) {
    case "OPEN_SIDEBAR_RESPONSE":
      console.log("sidebar reopened");
      return;
    default:
      console.log("ERROR: encountered unsupported response");
  }
}
