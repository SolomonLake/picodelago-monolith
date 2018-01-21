/* @flow */

export type IdleTyperUserProperties = {
  userPointsBreakdown: string,
  userUniqueSentences: string,
  userUniqueWords: string,
  userSentencesCount: string,
  userWordsCount: string
};

export type IdleTyperDocProperties = {
  documentPointsBreakdown: string,
  documentUniqueSentences: string,
  documentUniqueWords: string,
  documentSentencesCount: string,
  documentWordsCount: string
};

export type IdleTyperProperties = IdleTyperUserProperties &
  IdleTyperDocProperties;
