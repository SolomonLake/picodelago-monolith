type UserState = {
  userPointsBreakdown: PointsBreakdown,
  userUniqueSentences: Array<string>,
  userUniqueWords: Array<string>,
  userSentencesCount: number,
  userWordsCount: number
};

type DocState = {
  documentPointsBreakdown: PointsBreakdown,
  documentUniqueSentences: Array<string>,
  documentUniqueWords: Array<string>
  // documentSentencesCount: string,
  // documentWordsCount: string
};

type GameState = UserState & DocState;

type PointsBreakdown = {
  total: number,
  gameOpen: number,
  documentChanged: number,
  uniqueWords: number,
  uniqueSentences: number
};
