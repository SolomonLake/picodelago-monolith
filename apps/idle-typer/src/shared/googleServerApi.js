/* @flow */

// import { sidebarActionCreator } from "../parts/sidebar/sidebarActionCreator";

import { gameStateActionCreator } from "../parts/gameState/gameStateActionCreator";

import type { GameStateStoreExternalState } from "../parts/gameState/gameStateTypes";

class GoogleServerApi {
  getCurrentDocumentStatus(
    updateGameState: (_currentDocumentString: string) => void
  ) {
    // this doesn't actually use the callback, but it's there for explicitness/clarity
    google.script.run
      .withSuccessHandler((response: ServerResponse) => {
        handleAppscriptResponse(response);
      })
      .withFailureHandler(e => {
        handleAppscriptError(e);
      })
      .getCurrentDocumentStatus();
  }

  saveGameState(gameState: GameStateStoreExternalState) {
    google.script.run
      .withSuccessHandler((response: ServerResponse) => {
        handleAppscriptResponse(response);
      })
      .withFailureHandler(e => {
        handleAppscriptError(e);
      })
      .saveGameState(gameState);
  }

  openSidebar() {
    google.script.run
      .withSuccessHandler((response: ServerResponse) => {
        handleAppscriptResponse(response);
      })
      .withFailureHandler(e => {
        handleAppscriptError(e);
      })
      .openSidebar();
  }
}

export const googleServerApi = new GoogleServerApi();

function handleAppscriptResponse(response: ServerResponse): void {
  console.log("server response", response);

  switch (response.type) {
    case "GET_CURRENT_DOCUMENT_STATUS_RESPONSE":
      const currentDocumentString = response.currentDocumentString;
      console.log(currentDocumentString);
      gameStateActionCreator.updateGameState(currentDocumentString);
      return;
    case "SAVE_GAME_STATE_RESPONSE":
    case "OPEN_SIDEBAR_RESPONSE":
      return;
    default:
      console.log("ERROR: encountered unsupported response");
  }
}

function handleAppscriptError(error: string | Error): void {
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
