import * as React from "react";

require("./CharacterCreation.css");

import { characterCreationStore } from "./CharacterCreationStore";
import { CharacterCreationActionCreator } from "./CharacterCreationActionCreator";

export const CharacterCreationViewComponent = () => (
  <div className="character-creation">
    <div>
      <label htmlFor="characterName">Name</label>
      <input
        type="text"
        id="characterName"
        value={characterCreationStore.state.name}
        onChange={CharacterCreationActionCreator.setName}
      />
      <button onClick={CharacterCreationActionCreator.generateNewName}>
        Generate Random Name
      </button>
    </div>
    <div>
      <button onClick={CharacterCreationActionCreator.resetCharacterCreation}>
        {" "}
        Reset Character{" "}
      </button>
    </div>
  </div>
);
