/* @flow */

export type IdleTyperUserProperties = {
  points: string
};

export type IdleTyperDocProperties = {
  currentWordCount: string,
  currentSentences: string
};

export type IdleTyperProperties = IdleTyperUserProperties &
  IdleTyperDocProperties;
