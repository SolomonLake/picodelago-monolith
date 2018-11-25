import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { Main } from "./components/Main";

export const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
