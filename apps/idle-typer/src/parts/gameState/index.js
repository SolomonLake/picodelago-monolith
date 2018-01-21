/* @flow */
declare var google: any;
declare var data: any;

import { gameStateActionCreator } from "./gameStateActionCreator";

import { gameStateStore } from "./gameStateStore";

// ANGULAR APP DECLARED IN SIDEBAR/INDEX.JS

recursivelyGetDocumentState();
recursivelySaveGameState();

function recursivelyGetDocumentState() {
  setTimeout(() => {
    gameStateActionCreator.getDocumentState();
    recursivelyGetDocumentState();
  }, 1000);
}

function recursivelySaveGameState() {
  setTimeout(() => {
    gameStateActionCreator.saveGameStateInProperties();
    recursivelySaveGameState();
  }, 10000);
}
