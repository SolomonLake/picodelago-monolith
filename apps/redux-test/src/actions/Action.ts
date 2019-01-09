import { NavAction } from "./nav/NavAction";
import { PlansAction } from "./plans/PlansAction";
import { TimersAction } from "./timers/TimersActions";
import { GlobalTickAction } from "./globalTick/GlobalTickAction";
import { LoadStateAction } from "./loadState/LoadStateAction";

export type Action =
  | NavAction
  | PlansAction
  | TimersAction
  | GlobalTickAction
  | LoadStateAction;
