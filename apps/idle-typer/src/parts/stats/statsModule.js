/* @flow */

import { angularModule } from "../../shared/angular/moduleHelper";
import { fluxModule } from "../../shared/flux/angularFlux";

import { statsActionCreator } from "./statsActionCreator";
import { statsStore } from "./statsStore";

export const statsModule = angularModule("statsModule", []);

fluxModule(statsModule)
  .fluxActionCreator("statsActionCreator", statsActionCreator)
  .fluxStore("statsStoreState", statsStore);
