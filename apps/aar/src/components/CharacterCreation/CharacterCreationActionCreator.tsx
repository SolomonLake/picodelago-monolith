import "react";
import {
  InputFormEvent,
  InputEventTarget
} from "../../shared/typescriptInterfaces/types";

import { CharacterCreationStore } from "./CharacterCreationStore";

import { generateCharacterName } from "./CharacterCreationApi";

export const CharacterCreationActionCreator = {
  generateNewName: () => {
    CharacterCreationStore.updateProperties(CharacterCreationStore, {
      name: generateCharacterName()
    });
  },

  setName: (event: InputFormEvent<HTMLInputElement>) => {
    CharacterCreationStore.updateProperties(CharacterCreationStore, {
      name: event.target.value
    });
  }
};
