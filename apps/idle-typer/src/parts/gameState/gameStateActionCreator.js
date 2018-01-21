/* @flow */

import { dispatch } from "./gameStateActions";

import { gameStateStore } from "./gameStateStore";

import { handleAppscriptError } from "../../shared/actionCreatorServerHelper";

class GameStateActionCreator {
  getDocumentState() {
    google.script.run
      .withSuccessHandler((response: ServerResponse) => {
        gameStateHandleAppscriptResponse(response);
      })
      .withFailureHandler(e => {
        handleAppscriptError(e);
      })
      .getCurrentDocumentStatus();
  }

  setCurrentDocumentString(_currentDocumentString: string) {
    dispatch({
      type: "GAME_STATE__SET_CURRENT_DOCUMENT_STRING_REQUESTED",
      currentDocumentString: _currentDocumentString
    });
  }

  saveGameStateInProperties() {
    google.script.run
      .withSuccessHandler((response: ServerResponse) => {
        gameStateHandleAppscriptResponse(response);
      })
      .withFailureHandler(e => {
        handleAppscriptError(e);
      })
      .saveGameState(gameStateStore.getState());
  }
}

export const gameStateActionCreator = new GameStateActionCreator();

function gameStateHandleAppscriptResponse(response: ServerResponse): void {
  switch (response.type) {
    case "GET_CURRENT_DOCUMENT_STATUS_RESPONSE":
      console.log(response.currentDocumentString);
      return;
    case "SAVE_GAME_STATE_RESPONSE":
      return;
    default:
      console.log("ERROR: encountered unsupported response");
  }
}
