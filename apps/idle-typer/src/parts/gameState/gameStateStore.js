/* @flow */

import { immutableUpdate } from "../../shared/utils/immutableOps";
import { peardeckStore, PeardeckStore } from "../../shared/flux/PeardeckStore";

import Tokenizer from "sentence-tokenizer";
import uniqueArray from "array-unique";
import uniqueWordsFromString from "unique-words";

import type { GameStateAction } from "./gameStateActions";

import { initialState } from "../../server/index";

import type {
  GameStateStoreInternalState,
  GameStateStoreExternalState,
  GameStateStoreState,
  PointsBreakdown
} from "./gameStateTypes";

export const testString =
  "Hello this is a test string. I am a second sentence. Hello this is a test string.";

// CHANGE ME BACK: SERVER
const initialGameStoreStoreState: GameStateStoreInternalState = {
  // _previousExternalGameState: window.data.previousExternalGameState,
  // _currentDocumentString: window.data.currentDocumentString
  _previousExternalGameState: initialState,
  _currentDocumentString: testString
};

console.log(initialGameStoreStoreState);

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
    var mutableDocumentSentences: Array<string> = [];
    // var generatedWords: Array<string> = [];
    if (internalState._currentDocumentString) {
      var currentDocumentTokenizer = new Tokenizer("curDoc");
      currentDocumentTokenizer.setEntry(internalState._currentDocumentString);
      mutableDocumentSentences = currentDocumentTokenizer.getSentences();
      // generatedWords = currentDocumentTokenizer.getTokens();
    }

    const documentSentences = [...mutableDocumentSentences];
    // const currentWords = generatedWords;
    // modifies generatedSentences!!!
    var documentUniqueSentences = mutableDocumentSentences;
    uniqueArray(documentUniqueSentences);
    // const uniqueWords = uniqueArray(generatedWords);

    var userUniqueSentences = internalState._previousExternalGameState.userUniqueSentences.concat(
      documentUniqueSentences
    );
    uniqueArray(userUniqueSentences);

    const newPointsBreakdown = ((): PointsBreakdown => {
      const gameOpenNew = 1;
      const documentChangedNew = computeDocumentChangedPoints(internalState);
      const totalNew = gameOpenNew + documentChangedNew;
      return {
        total: totalNew,
        gameOpen: gameOpenNew,
        documentChanged: documentChangedNew,
        uniqueWords: 1,
        uniqueSentences: 1
      };
    })();

    const externalState: GameStateStoreState = {
      ...internalState,
      userPointsBreakdown: computeUserPointsBreakdown(
        internalState._previousExternalGameState.userPointsBreakdown,
        newPointsBreakdown
      ),
      userUniqueSentences: userUniqueSentences,
      userUniqueWords: [],
      userSentencesCount: 1,
      userWordsCount: 1,

      documentPointsBreakdown: computeDocPointsBreakdown(
        internalState._previousExternalGameState.documentPointsBreakdown,
        newPointsBreakdown
      ),
      documentUniqueSentences: documentUniqueSentences,
      documentUniqueWords: [],
      documentSentencesCount: documentSentences.length,
      documentWordsCount: 1
    };

    // console.log("computed gameState state:", externalState);
    return externalState;
  }
});

function computeDocumentChangedPoints(internalState) {
  const currentDocumentStringIsSame =
    internalState._currentDocumentString ===
    internalState._previousExternalGameState._currentDocumentString;
  return currentDocumentStringIsSame ? 10 : 0;
}

// function computeWordCount(currentDocumentTokenizer: Tokenizer): Array<string> {
//   const currentSentences = currentDocumentTokenizer.getSentences();
//   return currentSentences;
// }

function computeUserPointsBreakdown(
  previousUserPoints: PointsBreakdown,
  newPointsBreakdown: PointsBreakdown
): PointsBreakdown {
  return {
    total: previousUserPoints.total + newPointsBreakdown.total,
    gameOpen: previousUserPoints.gameOpen + newPointsBreakdown.gameOpen,
    documentChanged: newPointsBreakdown.documentChanged,
    uniqueWords: 1,
    uniqueSentences: 1
  };
}

function computeDocPointsBreakdown(
  previousDocPoints: PointsBreakdown,
  newPointsBreakdown: PointsBreakdown
): PointsBreakdown {
  return {
    total: previousDocPoints.total + newPointsBreakdown.total,
    gameOpen: previousDocPoints.gameOpen + newPointsBreakdown.gameOpen,
    documentChanged: previousDocPoints.documentChanged,
    uniqueWords: 1,
    uniqueSentences: 1
  };
}
