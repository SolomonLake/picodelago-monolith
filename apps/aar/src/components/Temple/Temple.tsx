import * as React from "react";

require("./Temple.css");

import { TempleStore, TempleStoreState } from "./TempleStore";
import { TempleActionCreator } from "./TempleActionCreator";

import { CharacterCreationViewComponent } from "../CharacterCreation/CharacterCreation";

export const TempleViewComponent = () => (
  <div className="temple">
    <TempleMainScreen />
  </div>
);

const TempleMainScreen = () => {
  switch (TempleStore.state.screen) {
    case "base":
      return (
        <button onClick={TempleActionCreator.changeToCharacterCreationScreen}>
          Create Character
        </button>
      );
    case "characterCreation":
      return <CharacterCreationViewComponent />;
    default:
      throw new Error("case match exhaustive");
  }
};
