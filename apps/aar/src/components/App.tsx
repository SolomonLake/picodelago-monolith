import * as React from "react";

require("./App.css");

import { AppStore } from "./AppStore";
import { AppStoreState } from "./AppStore";
import { AppActionCreator } from "./AppActionCreator";

import { WorldMapPresentationalComponent } from "./WorldMap/WorldMap";

export const App = (props: { appStoreState: AppStoreState }) => (
  <div className="app">
    <AppScreen appStoreState={props.appStoreState} />
  </div>
);

const AppScreen = (props: { appStoreState: AppStoreState }) => {
  if (props.appStoreState.screen === "world") {
    return <WorldMapPresentationalComponent />;
  } else {
    return (
      <div>
        <button onClick={AppActionCreator.changeToWorldScreen}> World </button>
      </div>
    );
  }
};
