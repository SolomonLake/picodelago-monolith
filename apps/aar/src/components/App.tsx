import * as React from "react";

require("./App.css");

import { AppStore, AppStoreState } from "./AppStore";
import { AppActionCreator } from "./AppActionCreator";

import { TempleStoreState } from "./Temple/TempleStore";

import { WorldMapViewComponent } from "./WorldMap/WorldMap";
import { TempleViewComponent } from "./Temple/Temple";

import { Stores } from "../index";

export const App = (props: { stores: Stores }) => (
  <div className="app">
    <div className="app-top-menu">
      <button onClick={AppActionCreator.changeToWorldScreen}> World </button>
      <button onClick={AppActionCreator.changeToTempleScreen}> Temple </button>
    </div>
    <div className="app-main-screen">
      <MainScreen stores={props.stores} />
    </div>
  </div>
);

const MainScreen = (props: { stores: Stores }) => {
  switch (props.stores.appStoreState.screen) {
    case "world":
      return <WorldMapViewComponent />;
    case "temple":
      return <TempleViewComponent stores={props.stores} />;
    default:
      throw new Error("case match exhaustive");
  }
};
