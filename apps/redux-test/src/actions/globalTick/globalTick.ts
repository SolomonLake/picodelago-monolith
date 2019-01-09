import { dispatch } from "../../store";

export function globalTick() {
  setInterval(() => {
    dispatch(
      {
        type: "GLOBAL_TICK__TOCK_ACTION"
      },
      { shouldNotLog: true }
    );
  }, 50);
}
