import { combineReducers } from "redux";
import { IStoreState } from "../store/IStoreState";
import { pageReducer } from "./pageReducer";

export const rootReducer = combineReducers<IStoreState>({
  page: pageReducer
});
