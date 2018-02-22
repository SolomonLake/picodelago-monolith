import { storeCreator, Store } from "../../shared/StoreState";

import { generateCharacterName } from "./CharacterCreationApi";

export interface CharacterCreationStoreState {
  name: string;
}

const initialStoreState: CharacterCreationStoreState = {
  name: generateCharacterName()
};

function appStoreCompute(
  newState: CharacterCreationStoreState
): CharacterCreationStoreState {
  return newState;
}

export var CharacterCreationStore: Store<
  CharacterCreationStoreState
> = storeCreator(initialStoreState, appStoreCompute);
