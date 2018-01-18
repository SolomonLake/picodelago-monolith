/* @flow */

import { immutableUpdate } from "../../shared/utils/immutableOps";
import {
  peardeckStore,
  type PeardeckStore
} from "../../shared/flux/PeardeckStore";

import Tokenizer from "sentence-tokenizer";
import uniqueArray from "array-unique";
import uniqueWords from "unique-words";

import type { SidebarAction } from "./sidebarActions";

import type {
  SidebarStoreInternalState,
  SidebarStoreExternalState,
  SidebarStoreState
} from "./sidebarTypes";

const initialSidebarStoreState: SidebarStoreInternalState = {
  _sidebarView: "main",
  _isWorking: false,
  _currentDocumentString: window.data.currentDocumentString
};

export const sidebarStore: PeardeckStore<
  SidebarStoreInternalState,
  SidebarStoreExternalState,
  SidebarAction
> = peardeckStore({
  initialState: initialSidebarStoreState,

  reducer(currentState, action) {
    switch (action.type) {
      case "SIDEBAR__CHANGE_VIEW_REQUESTED":
        return immutableUpdate(currentState, {
          _sidebarView: action.view
        });

      case "SIDEBAR__SET_CURRENT_DOCUMENT_STRING_REQUESTED":
        return immutableUpdate(currentState, {
          _currentDocumentString: action.currentDocumentString
        });

      case "SIDEBAR__SET_IS_WORKING_REQUESTED":
        return immutableUpdate(currentState, {
          _isWorking: action.isWorking
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

    const externalState: SidebarStoreState = {
      ...internalState,
      sidebarView: internalState._sidebarView,
      isWorking: internalState._isWorking,
      currentSentences: currentSentences,
      currentWordCount: currentWords.length,
      points: 1
    };

    console.log("computed state:", externalState);
    return externalState;
  }
});

function computeWordCount(currentDocumentTokenizer: Tokenizer): Array<string> {
  const currentSentences = currentDocumentTokenizer.getSentences();
  return currentSentences;
}
