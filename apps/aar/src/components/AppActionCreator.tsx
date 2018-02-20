import { AppStore } from "./AppStore";

export const AppActionCreator = {
  changeToWorldScreen: () => {
    AppStore.updateProperties(AppStore, { screen: "world" });
  }
};
