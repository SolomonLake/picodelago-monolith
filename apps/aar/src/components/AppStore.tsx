import { Store, IStore } from "../shared/StoreState";

export interface AppStoreState {
  screen: "world" | "temple";
}

const initialStoreState: AppStoreState = {
  screen: "temple"
};

class AppStore extends Store<AppStoreState> {
  computeDerivedState(newState: AppStoreState) {
    return newState;
  }
}

export var appStore = new AppStore(initialStoreState);
