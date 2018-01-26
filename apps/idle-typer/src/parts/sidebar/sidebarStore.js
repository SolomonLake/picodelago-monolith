/* @flow */

import { immutableUpdate } from "../../shared/utils/immutableOps";
import {
  peardeckStore,
  type PeardeckStore
} from "../../shared/flux/PeardeckStore";

import type { SidebarAction } from "./sidebarActions";

import type {
  SidebarStoreInternalState,
  SidebarStoreExternalState,
  SidebarStoreState
} from "./sidebarTypes";

const initialSidebarStoreState: SidebarStoreInternalState = {
  _sidebarView: "main",
  _isWorking: false,
  _showGameState: false
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

      case "SIDEBAR__SET_IS_WORKING_REQUESTED":
        return immutableUpdate(currentState, {
          _isWorking: action.isWorking
        });

      case "SIDEBAR__TOGGLE_SHOW_GAME_STATE_REQUESTED":
        return immutableUpdate(currentState, {
          _showGameState: !currentState._showGameState
        });

      default:
        return currentState;
    }
  },

  computePublics: internalState => {
    const externalState: SidebarStoreState = {
      ...internalState,
      sidebarView: internalState._sidebarView,
      isWorking: internalState._isWorking,
      showGameState: internalState._showGameState
    };

    console.log("computed sidebar state:", externalState);
    return externalState;
  }
});
