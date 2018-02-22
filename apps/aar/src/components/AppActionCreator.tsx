import { appStore } from "./AppStore";

export const AppActionCreator = {
  changeToWorldScreen: () => {
    appStore.updateProperties({ screen: "world" });
  },

  changeToTempleScreen: () => {
    appStore.updateProperties({ screen: "temple" });
  }
};
