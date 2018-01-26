/* @flow */

import appDispatcher from "../../shared/flux/AppDispatcher";

import { gameStateStore } from "./gameStateStore";

import type { GameStateStoreExternalState } from "./gameStateTypes";

type gameStateSetCurrentDocumentStringAction = {
  type: "GAME_STATE__UPDATE_STATE_REQUESTED",
  previousExternalGameState: GameStateStoreExternalState,
  currentDocumentString: string
};

export type GameStateAction = gameStateSetCurrentDocumentStringAction;

export function dispatch(action: GameStateAction) {
  const prevState = gameStateStore.getState();
  appDispatcher.dispatch(action);
  // sidebarEffects(sidebarStore.getState(), prevState);
}
