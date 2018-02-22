import * as React from "react";

require("./CharacterCreation.css");

import { CharacterCreationStore } from "./CharacterCreationStore";
import { CharacterCreationActionCreator } from "./CharacterCreationActionCreator";

export const CharacterCreationViewComponent = () => (
  <div className="character-creation">
    <label htmlFor="characterName">Name</label>
    <input
      type="text"
      id="characterName"
      value={CharacterCreationStore.state.name}
      onChange={CharacterCreationActionCreator.setName}
    />
    <button onClick={CharacterCreationActionCreator.generateNewName}>
      Generate Random Name
    </button>
  </div>
);
