import { Store, IStore } from "../../shared/StoreState";

export interface TempleStoreState {
  screen: "base" | "characterCreation";
}

const initialStoreState: TempleStoreState = {
  screen: "base"
};

class TempleStore extends Store<TempleStoreState> {}

export var templeStore = new TempleStore(initialStoreState);
