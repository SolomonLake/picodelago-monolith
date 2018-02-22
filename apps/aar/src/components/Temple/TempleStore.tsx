import { storeCreator, Store } from "../../shared/StoreState";

export interface TempleStoreState {
  screen: "base" | "characterCreation";
}

const initialStoreState: TempleStoreState = {
  screen: "base"
};

export var TempleStore: Store<TempleStoreState> = storeCreator(
  initialStoreState
);
