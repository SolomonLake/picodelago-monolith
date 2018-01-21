/* @flow */

export type SidebarView = "main" | "bonus";

export type SidebarStoreInternalState = {
  _sidebarView: SidebarView,
  _isWorking: boolean
};

export type SidebarStoreExternalState = {
  sidebarView: SidebarView,
  isWorking: boolean
};

export type SidebarStoreState = SidebarStoreInternalState &
  SidebarStoreExternalState;
