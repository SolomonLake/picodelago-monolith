import { renderApp } from "../index";

import { AppStore } from "../components/AppStore";

export interface Store<T> {
  state: T;
  computeDerivedState: (newState: T) => T;
  updateProperties: (store: Store<T>, updatedProperties: T) => void;
}

export function storeCreator<T>(
  initialState: T,
  computeDerivedState?: (newState: T) => T
): Store<T> {
  return {
    state: initialState,

    computeDerivedState: computeDerivedState
      ? computeDerivedState
      : (newState: T) => {
          return newState;
        },

    updateProperties: (store: Store<T>, updatedProperties: T): void => {
      const oldState = store.state;
      console.log(
        "Updating Properties:",
        updatedProperties,
        "in store",
        oldState
      );
      const updatedState = {
        // @ts-ignore: spread operator on object error
        ...oldState,
        // @ts-ignore: spread operator on object error
        ...updatedProperties
      };
      const newState = store.computeDerivedState(updatedState);
      store.state = newState;
      console.log("new state:", newState);

      renderApp();
    }
  };
}
