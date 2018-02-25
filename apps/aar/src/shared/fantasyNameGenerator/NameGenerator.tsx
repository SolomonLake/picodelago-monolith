import { generateFantasyDwarfs } from "./fantasy-dwarfs/dwarfs";

export function nameGenerator(
  group: Array<string>,
  individual: Array<string>,
  quantity: number,
  type: number
): string {
  if (arguments.length < 2) {
    console.error(
      "Usage: fantasy-names GROUP INDIVIDUAL [QUANTITY=1] [TYPE=0] [SEED]"
    );
  } else {
    if (typeof quantity === "undefined") quantity = 1;
    if (typeof type === "undefined") type = 0;

    return generateFantasyDwarfs(type);
  }
}
