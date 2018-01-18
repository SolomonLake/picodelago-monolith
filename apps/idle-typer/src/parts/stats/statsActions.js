/* @flow */

import appDispatcher from "../../shared/flux/AppDispatcher";

import { statsStore } from "./statsStore";

// import { sidebarEffects } from "./sidebarEffects";

type statsAction = {
  type: "STATS_REQESTED"
};

export type StatsAction = statsAction;

export function dispatch(action: StatsAction) {
  const prevState = statsStore.getState();
  appDispatcher.dispatch(action);
  // sidebarEffects(sidebarStore.getState(), prevState);
}
