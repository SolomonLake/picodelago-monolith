/* @flow */

import { immutableUpdate } from "../../shared/utils/immutableOps";
import {
  peardeckStore,
  type PeardeckStore
} from "../../shared/flux/PeardeckStore";

import Tokenizer from "sentence-tokenizer";
import uniqueArray from "array-unique";
import uniqueWords from "unique-words";

import type { GameStateAction } from "./gameStateActions";

import type {
  GameStateStoreInternalState,
  GameStateStoreExternalState,
  GameStateStoreState
} from "./gameStateTypes";

const initialGameStoreStoreState: GameStateStoreInternalState = {
  _currentDocumentString: window.data.currentDocumentString
};

export const gameStateStore: PeardeckStore<
  GameStateStoreInternalState,
  GameStateStoreExternalState,
  GameStateAction
> = peardeckStore({
  initialState: initialGameStoreStoreState,

  reducer(currentState, action) {
    switch (action.type) {
      case "GAME_STATE__SET_CURRENT_DOCUMENT_STRING_REQUESTED":
        return immutableUpdate(currentState, {
          _currentDocumentString: action.currentDocumentString
        });
      default:
        return currentState;
    }
  },

  computePublics: internalState => {
    var currentSentences = [];
    var currentWords = [];
    if (internalState._currentDocumentString) {
      var currentDocumentTokenizer = new Tokenizer("curDoc");
      currentDocumentTokenizer.setEntry(internalState._currentDocumentString);
      currentSentences = currentDocumentTokenizer.getSentences();
      currentWords = currentDocumentTokenizer.getTokens();
    }

    const externalState: GameStateStoreState = {
      ...internalState,
      docStringTest: internalState._currentDocumentString,
      currentSentences: currentSentences,
      currentWordCount: currentWords.length,
      points: 1
    };

    console.log("computed gameState state:", externalState);
    return externalState;
  }
});

function computeWordCount(currentDocumentTokenizer: Tokenizer): Array<string> {
  const currentSentences = currentDocumentTokenizer.getSentences();
  return currentSentences;
}
