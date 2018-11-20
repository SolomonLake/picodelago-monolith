import { NavAction } from "./nav/NavAction";
import { PlansAction } from "./plans/PlansAction";
import { TimersAction } from "./timers/TimersActions";

export type Action = NavAction | PlansAction | TimersAction;
