/* @flow */

export type SidebarView = "main" | "bonus";

export type SidebarStoreInternalState = {
  _sidebarView: SidebarView,
  _isWorking: boolean,
  _showGameState: boolean
};

export type SidebarStoreExternalState = {
  sidebarView: SidebarView,
  isWorking: boolean,
  showGameState: boolean
};

export type SidebarStoreState = SidebarStoreInternalState &
  SidebarStoreExternalState;
