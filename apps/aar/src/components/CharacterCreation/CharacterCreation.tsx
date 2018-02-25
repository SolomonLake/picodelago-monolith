import * as React from "react";

require("./CharacterCreation.css");

import { characterCreationStore } from "./CharacterCreationStore";
import { CharacterCreationActionCreator } from "./CharacterCreationActionCreator";

export const CharacterCreationViewComponent = () => (
  <div className="character-creation">
    <Name />
    <Title />
    <ResetCharacter />
  </div>
);

const Name = () => {
  return (
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
  );
};

const Title = () => {
  return (
    <div>
      <label htmlFor="characterTitle">Title</label>
      <input
        type="text"
        id="characterTitle"
        value={characterCreationStore.state.title}
        onChange={CharacterCreationActionCreator.setTitle}
      />
      <button onClick={CharacterCreationActionCreator.generateNewTitle}>
        Generate Random Title
      </button>
    </div>
  );
};

const ResetCharacter = () => {
  return (
    <div>
      <button onClick={CharacterCreationActionCreator.resetCharacterCreation}>
        Reset Character
      </button>
    </div>
  );
};
