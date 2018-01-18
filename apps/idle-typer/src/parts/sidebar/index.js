/* @flow */
declare var google: any;
declare var data: any;

import { registeredAngularModules } from "../../shared/angular/moduleHelper";

import { sidebarModule } from "./sidebarModule";
import { statsModule } from "../stats/statsModule";

import { sidebarActionCreator } from "./sidebarActionCreator";

import { sidebarStore } from "./sidebarStore";

const sidebarApp = angular.module(
  "sidebarApp",
  // [statsModule.name].concat(registeredAngularModules())
  registeredAngularModules()
);

console.log("version 0.01");

sidebarApp.run(["$rootScope", $rootScope => {}]);

document.addEventListener("visibilitychange", () => {
  if (document.hidden === false) {
    console.log("sidebar became visible");
  }
});

recursivelyGetDocumentStats();

function recursivelyGetDocumentStats() {
  setTimeout(() => {
    sidebarActionCreator.updateGameState();
    recursivelyGetDocumentStats();
  }, 1000);
}
