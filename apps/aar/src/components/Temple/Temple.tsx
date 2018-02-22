import * as React from "react";

require("./Temple.css");

import { Stores } from "../../index";

import { TempleStore, TempleStoreState } from "./TempleStore";
import { TempleActionCreator } from "./TempleActionCreator";

import { CharacterCreationViewComponent } from "../CharacterCreation/CharacterCreation";

export const TempleViewComponent = (props: { stores: Stores }) => (
  <div className="temple">
    <TempleMainScreen stores={props.stores} />
  </div>
);

const TempleMainScreen = (props: { stores: Stores }) => {
  switch (props.stores.templeStoreState.screen) {
    case "base":
      return (
        <button onClick={TempleActionCreator.changeToCharacterCreationScreen}>
          Create Character
        </button>
      );
    case "characterCreation":
      return <CharacterCreationViewComponent stores={props.stores} />;
    default:
      throw new Error("case match exhaustive");
  }
};
