/* @flow */

import { dispatch } from "./sidebarActions";

import { sidebarStore } from "./sidebarStore";

class SidebarActionCreator {
  switchToMainView() {
    dispatch({
      type: "SIDEBAR__CHANGE_VIEW_REQUESTED",
      view: "main"
    });
  }

  setCurrentDocumentString(_currentDocumentString: string) {
    dispatch({
      type: "SIDEBAR__SET_CURRENT_DOCUMENT_STRING_REQUESTED",
      currentDocumentString: _currentDocumentString
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

  updateGameState() {
    google.script.run
      .withSuccessHandler((response: ServerResponse) => {
        handleAppscriptResponse(response);
      })
      .withFailureHandler(e => {
        handleAppscriptError(e);
      })
      .updateGameState({
        points: 1,
        currentWordCount: 1,
        currentSentences: [""]
      });
  }
}

export const sidebarActionCreator = new SidebarActionCreator();

function handleAppscriptResponse(response: ServerResponse): void {
  switch (response.type) {
    case "OPEN_SIDEBAR_RESPONSE":
      console.log("sidebar reopened");
      return;
    case "UPDATE_GAME_STATE_RESPONSE":
      const currentDocumentString = response.currentDocumentString;
      console.log("docStatus", currentDocumentString);
      sidebarActionCreator.setCurrentDocumentString(currentDocumentString);
      return;
    default:
      console.log("ERROR: encountered unsupported response");
  }
}

function handleAppscriptError(error): void {
  console.log("ERROR MAKING APPSCRIPT CALL:", error);

  var errorMessage = "";
  if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = error.message;
  }

  const isNotNetworkError = !errorMessage.startsWith("NetworkError");

  if (isNotNetworkError) {
    //handle error
  }
}
