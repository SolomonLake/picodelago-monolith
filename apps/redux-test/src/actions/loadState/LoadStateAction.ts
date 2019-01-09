import { IStoreState } from "../../store/IStoreState";

export type GotLoadedState = {
  readonly type: "LOAD_STATE__GOT_LOADED_STATE";
  readonly state: IStoreState;
};

export type LoadStateAction = GotLoadedState;
