import "react";
import {
  InputFormEvent,
  InputEventTarget
} from "../../shared/typescriptInterfaces/types";

import { characterCreationStore } from "./CharacterCreationStore";

import { generateCharacterName } from "./CharacterCreationApi";

export const CharacterCreationActionCreator = {
  generateNewName: () => {
    characterCreationStore.updateProperties({
      name: generateCharacterName()
    });
  },

  setName: (event: InputFormEvent<HTMLInputElement>) => {
    characterCreationStore.updateProperties({
      name: event.target.value
    });
  },

  resetCharacterCreation: () => {
    characterCreationStore.resetToInitialState();
  }
};
