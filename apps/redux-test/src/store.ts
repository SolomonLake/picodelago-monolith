import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { Action } from "./actions/Action";

export const store = createStore(rootReducer);

export function dispatch(
  action: Action,
  maybeOptions?: { shouldNotLog?: boolean }
) {
  const options = maybeOptions || {};
  if (!options.shouldNotLog) {
    console.log(`${action.type}  ACTION=`, action);
  }
  store.dispatch(action);
}
