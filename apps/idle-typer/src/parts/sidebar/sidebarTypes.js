/* @flow */

export type SidebarView = "main" | "bonus";

export type SidebarStoreInternalState = {
  _sidebarView: SidebarView,
  _isWorking: boolean,
  _currentDocumentString: string
};

export type SidebarStoreExternalState = GameState & {
  sidebarView: SidebarView,
  isWorking: boolean
};

export type SidebarStoreState = SidebarStoreInternalState &
  SidebarStoreExternalState;
