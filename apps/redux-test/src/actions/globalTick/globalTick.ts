import { store } from "../../store";

export function globalTick() {
  setInterval(() => {
    store.dispatch({
      type: "GLOBAL_TICK__TOCK_ACTION"
    });
  }, 50);
}
