import * as React from "react";

require("./CharacterCreation.css");

import { Stores } from "../../index";

import { CharacterCreationStore } from "./CharacterCreationStore";
import { CharacterCreationActionCreator } from "./CharacterCreationActionCreator";

export const CharacterCreationViewComponent = (props: { stores: Stores }) => (
  <div className="character-creation" />
);
