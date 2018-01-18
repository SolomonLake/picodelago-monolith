type UserState = {
  points: number
};

type DocState = {
  currentWordCount: number,
  currentSentences: Array<string>
};

type GameState = UserState & DocState;
