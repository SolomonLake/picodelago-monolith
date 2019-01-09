import { store } from "../../store";
import { AsyncStorage } from "react-native";

export async function loadState(): Promise<void> {
  const stateString = await AsyncStorage.getItem("appState");
  if (stateString) {
    store.dispatch({
      type: "LOAD_STATE__GOT_LOADED_STATE",
      state: JSON.parse(stateString)
    });
  } else {
    // do nothing
  }
  setInterval(() => {
    AsyncStorage.setItem("appState", JSON.stringify(store.getState()));
  }, 1000);
}
