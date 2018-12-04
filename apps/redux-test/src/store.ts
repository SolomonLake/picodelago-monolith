import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { setInterval } from "timers";
import { AsyncStorage } from "react-native";

export const store = createStore(rootReducer);

setInterval(() => {
  AsyncStorage.setItem("appState", JSON.stringify(store.getState()));
}, 1000);
