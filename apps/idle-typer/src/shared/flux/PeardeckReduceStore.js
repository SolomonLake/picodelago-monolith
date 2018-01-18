/* @flow */

import { ReduceStore } from "flux/utils";
import AppDispatcher from "./AppDispatcher";

export class PeardeckReduceStore<TState> extends ReduceStore<TState> {
  type: "pd-flux-reducer";

  constructor() {
    super(AppDispatcher);
    this.type = "pd-flux-reducer";
  }

  // Just don't rely on ReduceStore typing
  // Type it here
  getState(): TState {
    return super.getState();
  }
}

export function onStorePropertyChanged<
  State,
  Store: PeardeckReduceStore<State>,
  P
>(
  store: Store,
  property: (state: State) => P,
  listener: (property: P) => void
) {
  function getValue() {
    return property(store.getState());
  }

  let currentValue = getValue();
  listener(currentValue);

  store.addListener(() => {
    const newValue = getValue();
    if (newValue != currentValue) {
      currentValue = newValue;
      listener(currentValue);
    }
  });
}
