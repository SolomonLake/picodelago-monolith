/* @flow */

import { immutableUpdate } from "../../shared/utils/immutableOps";
import { peardeckStore, PeardeckStore } from "../../shared/flux/PeardeckStore";

import Tokenizer from "sentence-tokenizer";
import uniqueArray from "array-unique";
import uniqueWords from "unique-words";

import type { GameStateAction } from "./gameStateActions";

import type {
  GameStateStoreInternalState,
  GameStateStoreExternalState,
  GameStateStoreState,
  PointsBreakdown
} from "./gameStateTypes";

const initialGameStoreStoreState: GameStateStoreInternalState = {
  _previousExternalGameState: window.data.previousExternalGameState,
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
      case "GAME_STATE__UPDATE_STATE_REQUESTED":
        return immutableUpdate(currentState, {
          _previousExternalGameState: action.previousExternalGameState,
          _currentDocumentString: action.currentDocumentString
        });
      default:
        return currentState;
    }
  },

  computePublics: internalState => {
    var currentSentences: Array<string> = [];
    var currentWords: Array<string> = [];
    if (internalState._currentDocumentString) {
      var currentDocumentTokenizer = new Tokenizer("curDoc");
      currentDocumentTokenizer.setEntry(internalState._currentDocumentString);
      currentSentences = currentDocumentTokenizer.getSentences();
      currentWords = currentDocumentTokenizer.getTokens();
    }

    const externalState: GameStateStoreState = {
      ...internalState,
      userPointsBreakdown: computeUserPointsBreakdown(
        internalState._previousExternalGameState
      ),
      userUniqueSentences: [],
      userUniqueWords: [],
      userSentencesCount: 1,
      userWordsCount: 1,

      documentPointsBreakdown: computeDocPointsBreakdown(
        internalState._previousExternalGameState
      ),
      documentUniqueSentences: [],
      documentUniqueWords: [],
      documentSentencesCount: 1,
      documentWordsCount: 1
    };

    console.log("computed gameState state:", externalState);
    return externalState;
  }
});

function computeWordCount(currentDocumentTokenizer: Tokenizer): Array<string> {
  const currentSentences = currentDocumentTokenizer.getSentences();
  return currentSentences;
}

function computeUserPointsBreakdown(previousState): PointsBreakdown {
  return {
    total: 1,
    gameOpen: 1,
    documentChanged: 1,
    uniqueWords: 1,
    uniqueSentences: 1
  };
}

function computeDocPointsBreakdown(previousState): PointsBreakdown {
  return {
    total: 1,
    gameOpen: 1,
    documentChanged: 1,
    uniqueWords: 1,
    uniqueSentences: 1
  };
}
