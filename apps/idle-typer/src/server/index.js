/* @flow */

import type {
  IdleTyperProperties,
  IdleTyperUserProperties,
  IdleTyperDocProperties
} from "./serverTypes";

const initialUserProps: IdleTyperUserProperties = {
  points: "0"
};

const initialDocProps: IdleTyperDocProperties = {
  currentWordCount: "0",
  currentSentences: ""
};

declare function GET_ENV(a: string): any;

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
  resetAllProps();
  var t = HtmlService.createTemplateFromFile("sidebar.html");
  t.data = {
    initialState: getStateFromProperties(),
    currentDocumentString: getCurrentDocumentAsString()
  };
  const sidebar = t.evaluate();
  sidebar.setTitle("Idle Typer");
  DocumentApp.getUi().showSidebar(sidebar);
  return {
    type: "OPEN_SIDEBAR_RESPONSE"
  };
};

global.updateGameState = function(
  newGameState: GameState
): UpdateGameStateResponse {
  // saveStateToProps(newGameState);

  return {
    type: "UPDATE_GAME_STATE_RESPONSE",
    currentDocumentString: getCurrentDocumentAsString()
  };
};

/* 
  GENERAL METHODS
*/

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
  setUserProps(initialUserProps);
  setDocProps(initialDocProps);
}

/* 
  CONVERSION METHODS
*/

function convertStateToProps(state: GameState): IdleTyperProperties {
  return {
    points: JSON.stringify(state.points),
    currentWordCount: JSON.stringify(state.currentWordCount),
    currentSentences: JSON.stringify(state.currentSentences)
  };
}

function convertPropsToState(props: IdleTyperProperties): GameState {
  return {
    points: JSON.parse(props.points || "null"),
    currentWordCount: JSON.parse(props.currentWordCount || "null"),
    currentSentences: JSON.parse(props.currentSentences || "null")
  };
}

/* 
  DECONSTRUCTION METHODS
*/

function userStats(state: GameState): UserState {
  return {
    points: state.points
  };
}

function docStats(state: GameState): DocState {
  return {
    currentWordCount: state.currentWordCount,
    currentSentences: state.currentSentences
  };
}

function userProps(props: IdleTyperProperties): IdleTyperUserProperties {
  return {
    points: props.points
  };
}

function docProps(props: IdleTyperProperties): IdleTyperDocProperties {
  return {
    currentWordCount: props.currentWordCount,
    currentSentences: props.currentSentences
  };
}
