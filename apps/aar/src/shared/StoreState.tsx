import { renderApp } from "../index";

import { AppStore } from "../components/AppStore";

export interface Store<T> {
  state: T;
  updateProperties: (store: Store<T>, updatedProperties: T) => void;
}

export function storeCreator<T>(
  initialState: T,
  computeState: (newState: T) => T
): Store<T> {
  return {
    state: initialState,

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
      const newState = computeState(updatedState);
      store.state = newState;
      console.log("new state:", newState);

      renderApp();
    }
  };
}
