import { Store, IStore } from "../../shared/StoreState";

import { generateCharacterName } from "./CharacterCreationApi";

export interface CharacterCreationStoreState {
  name: string;
}

const initialStoreState: CharacterCreationStoreState = {
  name: generateCharacterName()
};

class CharacterCreationStore extends Store<CharacterCreationStoreState> {}

export var characterCreationStore = new CharacterCreationStore(
  initialStoreState
);
