import { nameGenerator } from "../../shared/fantasyNameGenerator/NameGenerator";

class CharacterCreationUtils {
  generateCharacterName(): string {
    console.log("making name");
    const name = nameGenerator(["real"], ["azerbaijanis"], 1, 0);
    console.log("name", name);
    return name;
  }

  generateCharacterTitle(): string {
    return "The Humble";
  }
}

export const characterCreationUtils = new CharacterCreationUtils();
