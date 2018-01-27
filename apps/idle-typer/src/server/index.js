/* @flow */

import type {
  IdleTyperProperties,
  IdleTyperUserProperties,
  IdleTyperDocProperties
} from "./serverTypes";

import type {
  PointsBreakdown,
  UserState,
  DocState
} from "../parts/gameState/gameStateTypes";

declare function GET_ENV(a: string): any;

const initialPointsBreakdown: PointsBreakdown = {
  total: 0,
  gameOpen: 0,
  documentChanged: 0,
  uniqueWords: 0,
  uniqueSentences: 0
};

// APPLIED ON INSTALL
const initialUserState: UserState = {
  userPointsBreakdown: initialPointsBreakdown,
  userUniqueSentences: [],
  userUniqueWords: [],
  userSentencesCount: 0,
  userWordsCount: 0
};

// NEED TO FIGURE OUT WHEN TO APPLY
const initialDocState: DocState = {
  documentPointsBreakdown: initialPointsBreakdown,
  documentUniqueSentences: [],
  documentUniqueWords: [],
  documentSentencesCount: 0,
  documentWordsCount: 0
};

// CHANGE ME BACK: SERVER
export const initialState: GameState = {
  ...initialUserState,
  ...initialDocState
};

const initialIdleTyperProperties = convertStateToProps(initialState);

const initialIdleTyperUserProperties = userProps(initialIdleTyperProperties);

const initialIdleTyperDocProperties = docProps(initialIdleTyperProperties);

/* 
  GLOBAL APPS SCRIPT ONINSTALL AND ONOPEN
*/

global.onInstall = function onInstall(e) {
  resetAllProps();
  global.openSidebar();
  global.onOpen(e);
};

global.onOpen = function onOpen(e) {
  var ui = DocumentApp.getUi();

  const releaseStage = GET_ENV("RELEASE_STAGE");

  ui = ui.createAddonMenu().addItem("Open Sidebar", "openSidebar");

  if (releaseStage != "production") {
    ui = ui.addSeparator().addItem("Dev", "openSidebar");
  }

  ui.addToUi();
};

/* 
  GLOBAL APPS SCRIPT METHODS
*/

global.openSidebar = function(): OpenSidebarResponse {
  openSidebar();
  return {
    type: "OPEN_SIDEBAR_RESPONSE"
  };
};

global.saveGameState = function(
  newGameState: GameState
): SaveGameStateResponse {
  saveStateToProps(newGameState);
  return {
    type: "SAVE_GAME_STATE_RESPONSE"
  };
};

global.getCurrentDocumentStatus = function(): GetCurrentDocumentStatusResponse {
  const currentDocumentString = getCurrentDocumentAsString();
  return {
    type: "GET_CURRENT_DOCUMENT_STATUS_RESPONSE",
    currentDocumentString: currentDocumentString
  };
};

global.resetAllProperties = function(): ResetAllPropertiesResponse {
  resetAllProps();
  openSidebar();
  return {
    type: "RESET_ALL_PROPERTIES_RESPONSE"
  };
};

/* 
  GENERAL METHODS
*/

function openSidebar(): void {
  var t = HtmlService.createTemplateFromFile("sidebar.html");
  t.data = {
    previousExternalGameState: getStateFromProperties(),
    currentDocumentString: getCurrentDocumentAsString()
  };
  const sidebar = t.evaluate();
  sidebar.setTitle("Idle Typer");
  DocumentApp.getUi().showSidebar(sidebar);
}

function getStateFromProperties(): GameState {
  const allProps = getProps();
  return convertPropsToState(allProps);
}

function saveStateToProps(state: GameState): void {
  const allProps = convertStateToProps(state);
  setProps(allProps);
}

function getCurrentDocumentAsString(): string {
  return DocumentApp.getActiveDocument()
    .getBody()
    .getText()
    .toString();
}

/* 
  GET PROPERTIES
*/

function getProps(): IdleTyperProperties {
  const userProps = getUserProps();
  const docProps = getDocProps();
  const allProps = {
    ...userProps,
    ...docProps
  };
  return allProps;
}

function getUserProps(): IdleTyperUserProperties {
  const userProps: IdleTyperUserProperties = PropertiesService.getUserProperties().getProperties();
  return userProps;
}

function getDocProps(): IdleTyperDocProperties {
  const docProps: IdleTyperDocProperties = PropertiesService.getDocumentProperties().getProperties();
  return docProps;
}

/* 
  SET PROPERTIES
*/

function setProps(props: IdleTyperProperties): void {
  const documentProperties = docProps(props);
  setDocProps(documentProperties);

  const userProperties = userProps(props);
  setUserProps(userProperties);
}

function setUserProps(props: IdleTyperUserProperties): void {
  PropertiesService.getUserProperties().setProperties(props);
}

function setDocProps(props: IdleTyperDocProperties): void {
  PropertiesService.getDocumentProperties().setProperties(props);
}

function resetAllProps(): void {
  setUserProps(initialIdleTyperUserProperties);
  setDocProps(initialIdleTyperDocProperties);
}

/* 
  CONVERSION METHODS
*/

function convertStateToProps(state: GameState): IdleTyperProperties {
  return {
    userPointsBreakdown: JSON.stringify(state.userPointsBreakdown),
    userUniqueSentences: JSON.stringify(state.userUniqueSentences),
    userUniqueWords: JSON.stringify(state.userUniqueWords),
    userSentencesCount: JSON.stringify(state.userSentencesCount),
    userWordsCount: JSON.stringify(state.userWordsCount),
    documentPointsBreakdown: JSON.stringify(state.documentPointsBreakdown),
    documentUniqueSentences: JSON.stringify(state.documentUniqueSentences),
    documentUniqueWords: JSON.stringify(state.documentUniqueWords),
    documentSentencesCount: JSON.stringify(state.documentSentencesCount),
    documentWordsCount: JSON.stringify(state.documentWordsCount)
  };
}

function convertPropsToState(props: IdleTyperProperties): GameState {
  return {
    userPointsBreakdown: JSON.parse(props.userPointsBreakdown || "null"),
    userUniqueSentences: JSON.parse(props.userUniqueSentences || "null"),
    userUniqueWords: JSON.parse(props.userUniqueWords || "null"),
    userSentencesCount: JSON.parse(props.userSentencesCount || "null"),
    userWordsCount: JSON.parse(props.userWordsCount || "null"),
    documentPointsBreakdown: JSON.parse(
      props.documentPointsBreakdown || "null"
    ),
    documentUniqueSentences: JSON.parse(
      props.documentUniqueSentences || "null"
    ),
    documentUniqueWords: JSON.parse(props.documentUniqueWords || "null")
  };
}

/* 
  DECONSTRUCTION METHODS
*/

function userState(state: GameState): UserState {
  return {
    userPointsBreakdown: state.userPointsBreakdown,
    userUniqueSentences: state.userUniqueSentences,
    userUniqueWords: state.userUniqueWords,
    userSentencesCount: state.userSentencesCount,
    userWordsCount: state.userWordsCount
  };
}

function docState(state: GameState): DocState {
  return {
    documentPointsBreakdown: state.documentPointsBreakdown,
    documentUniqueSentences: state.documentUniqueSentences,
    documentUniqueWords: state.documentUniqueWords,
    documentSentencesCount: state.documentSentencesCount,
    documentWordsCount: state.documentWordsCount
  };
}

function userProps(props: IdleTyperProperties): IdleTyperUserProperties {
  return {
    userPointsBreakdown: props.userPointsBreakdown,
    userUniqueSentences: props.userUniqueSentences,
    userUniqueWords: props.userUniqueWords,
    userSentencesCount: props.userSentencesCount,
    userWordsCount: props.userWordsCount
  };
}

function docProps(props: IdleTyperProperties): IdleTyperDocProperties {
  return {
    documentPointsBreakdown: props.documentPointsBreakdown,
    documentUniqueSentences: props.documentUniqueSentences,
    documentUniqueWords: props.documentUniqueWords,
    documentSentencesCount: props.documentSentencesCount,
    documentWordsCount: props.documentWordsCount
  };
}
