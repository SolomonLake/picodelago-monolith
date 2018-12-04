import { IStoreState } from "../store/IStoreState";
import { AsyncStorage } from "react-native";

async function loadedState(): Promise<IStoreState | null> {
  const stateString = await AsyncStorage.getItem("appState");
  if (stateString) {
    return JSON.parse(stateString);
  } else {
    return null;
  }
}

export const initialStoreState: IStoreState = {
  ui: { page: "PlansOverview" },
  plans: {}
};
