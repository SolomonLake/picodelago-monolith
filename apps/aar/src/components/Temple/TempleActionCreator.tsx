import { templeStore } from "./TempleStore";

export const TempleActionCreator = {
  changeToBaseScreen: () => {
    templeStore.updateProperties({ screen: "base" });
  },

  changeToCharacterCreationScreen: () => {
    templeStore.updateProperties({ screen: "characterCreation" });
  }
};
