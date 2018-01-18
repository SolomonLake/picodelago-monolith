/* @flow */

import { angularModule } from "../../shared/angular/moduleHelper";
import { fluxModule } from "../../shared/flux/angularFlux";

import { sidebarStore } from "./sidebarStore";
import { sidebarActionCreator } from "./sidebarActionCreator";

export const sidebarModule = angularModule("sidebarModule", []);

fluxModule(sidebarModule)
  .fluxStore("sidebarStoreState", sidebarStore)
  .fluxActionCreator("sidebarActionCreator", sidebarActionCreator);
