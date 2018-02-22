import { renderApp } from "../index";

export interface IStore<T> {
  state: T;
  computeDerivedState: (newState: T) => T;
  updateProperties: (store: Store<T>, updatedProperties: T) => void;
}

export class Store<T> {
  initialState: T;
  state: T;

  constructor(initialState: T) {
    this.initialState = initialState;
    this.state = initialState;
  }

  updateProperties(updatedProperties: T): void {
    const oldState = this.state;
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
    const newState = this.computeDerivedState(updatedState);
    this.state = newState;
    console.log("new state:", newState);

    renderApp();
  }

  resetToInitialState(): void {
    this.state = this.initialState;
    renderApp();
  }

  computeDerivedState(newState: T) {
    return newState;
  }
}
