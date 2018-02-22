import { CharacterCreationStore } from "./CharacterCreationStore";

import { generateCharacterName } from "./CharacterCreationApi";

export const CharacterCreationActionCreator = {
  generateNewName: () => {
    CharacterCreationStore.updateProperties(CharacterCreationStore, {
      name: generateCharacterName()
    });
  }
};
