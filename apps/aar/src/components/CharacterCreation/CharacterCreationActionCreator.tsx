import "react";
import {
  InputFormEvent,
  InputEventTarget
} from "../../shared/typescriptInterfaces/types";

import { characterCreationStore } from "./CharacterCreationStore";

import { characterCreationUtils } from "./CharacterCreationUtils";

export const CharacterCreationActionCreator = {
  generateNewName: () => {
    characterCreationStore.updateProperties({
      name: characterCreationUtils.generateCharacterName()
    });
  },

  generateNewTitle: () => {
    characterCreationStore.updateProperties({
      title: characterCreationUtils.generateCharacterTitle()
    });
  },

  setName: (event: InputFormEvent<HTMLInputElement>) => {
    characterCreationStore.updateProperties({
      name: event.target.value
    });
  },

  setTitle: (event: InputFormEvent<HTMLInputElement>) => {
    characterCreationStore.updateProperties({
      title: event.target.value
    });
  },

  resetCharacterCreation: () => {
    characterCreationStore.resetToInitialState();
  }
};
