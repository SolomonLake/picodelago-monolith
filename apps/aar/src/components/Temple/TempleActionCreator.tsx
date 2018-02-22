import { TempleStore } from "./TempleStore";

export const TempleActionCreator = {
  changeToBaseScreen: () => {
    TempleStore.updateProperties(TempleStore, { screen: "base" });
  },

  changeToCharacterCreationScreen: () => {
    TempleStore.updateProperties(TempleStore, { screen: "characterCreation" });
  }
};
