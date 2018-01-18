/* @flow */

import { immutableUpdate } from "../../shared/utils/immutableOps";
import {
  peardeckStore,
  type PeardeckStore
} from "../../shared/flux/PeardeckStore";

import type { StatsAction } from "./statsActions";

// import type {
//   StatsStoreInternalState,
//   StatsStoreExternalState,
//   StatsStoreState
// } from "./sidebarTypes";

type StatsStoreInternalState = {
  _test: "test"
};

type StatsStoreExternalState = {
  test: "test"
};

type StatsStoreState = StatsStoreInternalState & StatsStoreExternalState;

export const statsStore: PeardeckStore<
  StatsStoreInternalState,
  StatsStoreExternalState,
  StatsAction
> = peardeckStore({
  initialState: { _test: "test" },

  reducer(currentState, action) {
    switch (action.type) {
      default:
        return currentState;
    }
  },

  computePublics: internalState => {
    const externalState: StatsStoreState = {
      ...internalState,
      test: internalState._test
    };

    console.log("computed stats state:", externalState);
    return externalState;
  }
});
