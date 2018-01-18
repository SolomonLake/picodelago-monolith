/* @flow */

import type { PeardeckReduceStore } from "./PeardeckReduceStore";

function lowercaseFirstLetter(name: string): string {
  return name[0].toLowerCase() + name.substr(1);
}
export type FluxModule<StateType> = {
  fluxStore: (
    name: string,
    fluxStore: FluxStore<StateType>
  ) => FluxModule<StateType>,
  fluxActionCreator: (
    name: string,
    fluxActionCreator: any
  ) => FluxModule<StateType>
};

export type FluxStore<StateType> = PeardeckReduceStore<StateType>;

function isNameMinified(func) {
  return func.name && func.name.length < 3;
}

export function fluxModule<StateType>(
  angularModule: any
): FluxModule<StateType> {
  return {
    fluxStore(name: string, fluxStore: FluxStore<StateType>) {
      if (name[0] !== name[0].toLowerCase()) {
        throw new Error("Stores name should start with lowecase letter");
      }
      angularModule.service(name, () => fluxStore);
      angularModule.run([
        "$rootScope",
        function($rootScope) {
          projectStoreToScope($rootScope, name, fluxStore);
        }
      ]);
      return this;
    },
    fluxActionCreator(name: string, fluxActionCreator: () => any) {
      if (name[0] !== name[0].toLowerCase()) {
        throw new Error(
          "Action creator name should start with lowecase letter"
        );
      }

      angularModule.service(name, () => fluxActionCreator);
      angularModule.run([
        "$rootScope",
        name,
        function($rootScope, actionCreator) {
          $rootScope[name] = actionCreator;
        }
      ]);

      return this;
    }
  };
}

function getStoreState<StateType>(store: FluxStore<StateType>): StateType {
  switch (store.type) {
    case "pd-flux-reducer":
      return store.getState();
    case "immutable":
      return store.getState().toJS();
    default:
      store.checkTotal;
      throw new Error(`Unknown store type ${store.type}`);
  }
}
export function projectStoreToScope<StateType>(
  $scope: any,
  propertyName: string,
  store: FluxStore<StateType>
) {
  $scope[propertyName] = getStoreState(store);

  if (store.type === "pd-flux-reducer") {
    var cleanup = store.addListener(() => {
      $scope[propertyName] = getStoreState(store);
      $scope.$evalAsync();
    }).remove;
  } else {
    var cleanup = store.addChangeListener(() => {
      $scope[propertyName] = getStoreState(store);
      $scope.$evalAsync();
    }).unregister;
  }

  $scope.$on("$destroy", () => {
    cleanup();
  });
}
