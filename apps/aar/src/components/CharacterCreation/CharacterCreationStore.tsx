import { Store, IStore } from "../../shared/StoreState";

import { characterCreationUtils } from "./CharacterCreationUtils";

export interface CharacterCreationStoreState {
  name: string;
  title: string;
}

const initialStoreState: CharacterCreationStoreState = {
  name: characterCreationUtils.generateCharacterName(),
  title: characterCreationUtils.generateCharacterTitle()
};

class CharacterCreationStore extends Store<CharacterCreationStoreState> {}

export var characterCreationStore = new CharacterCreationStore(
  initialStoreState
);
