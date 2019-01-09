import React from "react";
import { Provider } from "react-redux";
import { Main } from "./components/Main";
import { store } from "./store";
import { globalTick } from "./actions/globalTick/globalTick";
import { loadState } from "./actions/loadState/loadState";

loadState();
globalTick();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
