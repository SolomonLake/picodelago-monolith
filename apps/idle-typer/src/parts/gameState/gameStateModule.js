/* @flow */

import { angularModule } from "../../shared/angular/moduleHelper";
import { fluxModule } from "../../shared/flux/angularFlux";

import { gameStateActionCreator } from "./gameStateActionCreator";
import { gameStateStore } from "./gameStateStore";

export const gameStateModule = angularModule("gameStateModule", []);

fluxModule(gameStateModule)
  .fluxActionCreator("gameStateActionCreator", gameStateActionCreator)
  .fluxStore("gameStateStoreState", gameStateStore);
