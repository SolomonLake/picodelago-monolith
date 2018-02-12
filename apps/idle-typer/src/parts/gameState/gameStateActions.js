/* @flow */

import appDispatcher from "../../shared/flux/AppDispatcher";

import { gameStateStore } from "./gameStateStore";

import type {
  GameStateStoreExternalState,
  PreviousGameStateStoreState
} from "./gameStateTypes";

type gameStateSetCurrentDocumentStringAction = {
  type: "GAME_STATE__UPDATE_STATE_REQUESTED",
  previousExternalGameState: PreviousGameStateStoreState,
  currentDocumentString: string
};

export type GameStateAction = gameStateSetCurrentDocumentStringAction;

export function dispatch(action: GameStateAction) {
  const prevState = gameStateStore.getState();
  appDispatcher.dispatch(action);
  // sidebarEffects(sidebarStore.getState(), prevState);
}
