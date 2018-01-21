/* @flow */
declare var google: any;
declare var data: any;

import { registeredAngularModules } from "../../shared/angular/moduleHelper";

import { sidebarModule } from "./sidebarModule";
import { gameStateModule } from "../gameState/gameStateModule";

import { sidebarActionCreator } from "./sidebarActionCreator";

import { sidebarStore } from "./sidebarStore";

const sidebarApp = angular.module("sidebarApp", registeredAngularModules());

console.log("version 0.01");

sidebarApp.run(["$rootScope", $rootScope => {}]);

document.addEventListener("visibilitychange", () => {
  if (document.hidden === false) {
    console.log("sidebar became visible");
  }
});
