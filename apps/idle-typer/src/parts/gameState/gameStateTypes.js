/* @flow */

export type UserState = {
  userPointsBreakdown: PointsBreakdown,
  userUniqueSentences: Array<string>,
  userUniqueWords: Array<string>,
  userSentencesCount: number,
  userWordsCount: number
};

export type DocState = {
  documentPointsBreakdown: PointsBreakdown,
  documentUniqueSentences: Array<string>,
  documentUniqueWords: Array<string>,
  documentSentencesCount: number,
  documentWordsCount: number
};

export type GameState = UserState & DocState;

export type PointsBreakdown = {
  total: number,
  gameOpen: number,
  documentChanged: number,
  uniqueWords: number,
  uniqueSentences: number
};

export type GameStateStoreInternalState = {
  _previousExternalGameState: PreviousGameStateStoreState,
  _currentDocumentString: string
};

export type GameStateStoreExternalState = UserState & DocState;

export type GameStateStoreState = GameStateStoreInternalState &
  GameStateStoreExternalState;

export type PreviousGameStateStoreState = GameStateStoreExternalState & {
  _previousExternalGameState: ?{},
  _currentDocumentString: string
};
