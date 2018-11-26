import { NavAction } from "./nav/NavAction";
import { PlansAction } from "./plans/PlansAction";
import { TimersAction } from "./timers/TimersActions";
import { GlobalTickAction } from "./globalTick/GlobalTickAction";

export type Action = NavAction | PlansAction | TimersAction | GlobalTickAction;
