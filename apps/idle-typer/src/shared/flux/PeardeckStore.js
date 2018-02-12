/* @flow */

import appDispatcher from "./AppDispatcher";
import { PeardeckReduceStore } from "./PeardeckReduceStore";

export type ActionReducerFn<TInternalState, TAction> = (
  internalState: TInternalState,
  action: TAction
) => TInternalState;
export type ComputePublicsFn<TInternalState, TPublicState> = (
  internalState: TInternalState
) => TInternalState & TPublicState;
export type ReactiveReducerFn<TInternalState> = (
  internalState: TInternalState
) => TInternalState;
export type EffectsReducer<TInternalState, TPublicState> = (
  previousState: TInternalState & TPublicState,
  newState: TInternalState & TPublicState
) => void;

interface Dispatchable {
  getDispatchToken(): string;
  hasChanged(): boolean;
}

type ReduceGenericStoreProps<TInternalState> = {
  sourceStores?: Dispatchable[],
  initialState: TInternalState
};

export class PeardeckGenericStore<
  TInternalState,
  TPublicState,
  TAction
> extends PeardeckReduceStore<TInternalState & TPublicState> {
  constructor(props: ReduceGenericStoreProps<TInternalState>) {
    PeardeckGenericStore._initialProps = props;
    super();
    // https://medium.com/@gcanti/immutability-with-flow-faa050a1aef4
    (this: any)._props = props;
  }

  getInitialState(): TPublicState {
    return this.computePublics(PeardeckGenericStore._initialProps.initialState);
  }

  reduce(
    currentState: TInternalState & TPublicState,
    action: TAction
  ): TInternalState & TPublicState {
    appDispatcher.waitFor(
      (this._props.sourceStores || []).map(store => store.getDispatchToken())
    );
    const newInternalState = this.actionReduce(
      this.reactiveReduce(currentState),
      action
    );
    if (
      newInternalState !== currentState ||
      sourceStoresChanged(this._props.sourceStores)
    ) {
      const newState = this.computePublics(newInternalState);
      this.fireEffects(newState, currentState);
      return newState;
    } else {
      return currentState;
    }
  }

  actionReduce(internalState: TInternalState, action: TAction): TInternalState {
    return internalState;
  }

  reactiveReduce(internalState: TInternalState): TInternalState {
    return internalState;
  }

  computePublics(internalState: TInternalState): TInternalState & TPublicState {
    throw new Error("computePublics must be overridden");
  }

  fireEffects(
    newState: TInternalState & TPublicState,
    currentState: TInternalState & TPublicState
  ): void {}

  static _initialProps: ReduceGenericStoreProps<TInternalState>;
  +_props: ReduceGenericStoreProps<TInternalState>;
}

function sourceStoresChanged(stores: ?(Dispatchable[])) {
  stores = stores || [];
  return stores.filter(store => store.hasChanged()).length > 0;
}

type PeardeckStoreProps<TInternalState, TPublicState, TAction> = {
  reducer?: ActionReducerFn<TInternalState, TAction>,
  reactiveReducer?: ReactiveReducerFn<TInternalState>,
  computePublics: ComputePublicsFn<TInternalState, TPublicState>,
  sourceStores?: Dispatchable[],
  effectsReducer?: EffectsReducer<TInternalState, TPublicState>,
  initialState: TInternalState
};

export class PeardeckStore<
  TInternalState,
  TPublicState,
  TAction
> extends PeardeckGenericStore<TInternalState, TPublicState, TAction> {
  static initialProps: PeardeckStoreProps<
    TInternalState,
    TPublicState,
    TAction
  >;
  constructor(
    props: PeardeckStoreProps<TInternalState, TPublicState, TAction>
  ) {
    PeardeckStore.initialProps = props;
    super(props);
  }

  getInitialState(): TPublicState {
    return PeardeckStore.initialProps.computePublics(
      PeardeckStore.initialProps.initialState
    );
  }

  actionReduce(internalState: TInternalState, action: TAction): TInternalState {
    return this._props.reducer != null
      ? this._props.reducer(internalState, action)
      : internalState;
  }

  reactiveReduce(internalState: TInternalState): TInternalState {
    return this._props.reactiveReducer != null
      ? this._props.reactiveReducer(internalState)
      : internalState;
  }

  computePublics(internalState: TInternalState): TInternalState & TPublicState {
    return this._props.computePublics(internalState);
  }

  fireEffects(
    newState: TInternalState & TPublicState,
    currentState: TInternalState & TPublicState
  ): void {
    if (this._props.effectsReducer != null) {
      this._props.effectsReducer(newState, currentState);
    }
  }

  _props: PeardeckStoreProps<TInternalState, TPublicState, TAction>;
}

export function peardeckStore<TInternalState, TPublicState, TAction>(
  props: PeardeckStoreProps<TInternalState, TPublicState, TAction>
): PeardeckStore<TInternalState, TPublicState, TAction> {
  const store: PeardeckStore<
    TInternalState,
    TPublicState,
    TAction
  > = new PeardeckStore(props);
  return store;
}
