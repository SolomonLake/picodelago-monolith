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
    googleServerApi.getCurrentDocumentStatus(this.updateGameState);
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
}

export const gameStateActionCreator = new GameStateActionCreator();

function nullifyInternalGameState(
  gameState: GameStateStoreExternalState
): GameStateStoreExternalState {
  return {
    ...gameState,
    _previousExternalGameState: null,
    _currentDocumentString: null
  };
}
