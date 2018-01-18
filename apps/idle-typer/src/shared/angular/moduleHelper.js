/* @flow */

const modules: string[] = [];

export function angularModule(name: string, dependencies: string[]): NgModule {
  modules.push(name);
  return angular.module(name, dependencies);
}

export function registeredAngularModules(): string[] {
  return modules;
}
