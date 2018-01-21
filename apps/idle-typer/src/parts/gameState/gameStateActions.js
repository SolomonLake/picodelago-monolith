/* @flow */

import appDispatcher from "../../shared/flux/AppDispatcher";

import { gameStateStore } from "./gameStateStore";

type gameStateSetCurrentDocumentStringAction = {
  type: "GAME_STATE__SET_CURRENT_DOCUMENT_STRING_REQUESTED",
  currentDocumentString: string
};

export type GameStateAction = gameStateSetCurrentDocumentStringAction;

export function dispatch(action: GameStateAction) {
  const prevState = gameStateStore.getState();
  appDispatcher.dispatch(action);
  // sidebarEffects(sidebarStore.getState(), prevState);
}
