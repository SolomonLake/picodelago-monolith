import { combineReducers } from "redux";
import { IStoreState } from "../store/IStoreState";
import { plansReducer } from "./plansReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers<IStoreState>({
  ui: uiReducer,
  plans: plansReducer
});
