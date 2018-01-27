/* @flow */

import { dispatch } from "./gameStateActions";

import { gameStateStore } from "./gameStateStore";

import { googleServerApi } from "../../shared/googleServerApi";

import type {
  GameStateStoreState,
  GameStateStoreExternalState
} from "./gameStateTypes";

class GameStateActionCreator {
  getDocumentState() {
    // CHANGE ME BACK: SERVER
    // googleServerApi.getCurrentDocumentStatus(this.updateGameState);
    this.updateGameState("Hello this is a test string. I am a second sentence");
  }

  updateGameState(_currentDocumentString: string) {
    dispatch({
      type: "GAME_STATE__UPDATE_STATE_REQUESTED",
      previousExternalGameState: nullifyInternalGameState(
        gameStateStore.getState()
      ),
      currentDocumentString: _currentDocumentString
    });
  }

  saveGameStateInProperties() {
    console.log("SAVING GAME STATE");
    googleServerApi.saveGameState(
      nullifyInternalGameState(gameStateStore.getState())
    );
  }

  resetAllProperties() {
    googleServerApi.resetAllProperties();
  }
}

export const gameStateActionCreator = new GameStateActionCreator();

function nullifyInternalGameState(
  gameState: GameStateStoreExternalState
): GameStateStoreExternalState {
  return {
    ...gameState,
    _previousExternalGameState: null
  };
}
