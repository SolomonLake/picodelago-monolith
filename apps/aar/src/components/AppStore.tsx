import { Store, IStore } from "../shared/StoreState";

export interface AppStoreState {
  screen: "world" | "temple";
}

const initialStoreState: AppStoreState = {
  screen: "temple"
};

function appStoreCompute(newState: AppStoreState): AppStoreState {
  return newState;
}

class AppStore extends Store<AppStoreState> {}

export var appStore = new AppStore(initialStoreState);
