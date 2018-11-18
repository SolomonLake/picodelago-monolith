import { combineReducers } from "redux";
import { IStoreState } from "../store/IStoreState";
import { pageReducer } from "./pageReducer";
import { plansReducer } from "./plansReducer";

export const rootReducer = combineReducers<IStoreState>({
  page: pageReducer,
  plans: plansReducer
});
