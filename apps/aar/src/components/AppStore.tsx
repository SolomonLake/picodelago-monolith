import { storeCreator, Store } from "../shared/StoreState";

export interface AppStoreState {
  screen: "world" | "temple";
}

const initialStoreState: AppStoreState = {
  screen: "world"
};

function appStoreCompute(newState: AppStoreState): AppStoreState {
  return newState;
}

export var AppStore: Store<AppStoreState> = storeCreator(
  initialStoreState,
  appStoreCompute
);
