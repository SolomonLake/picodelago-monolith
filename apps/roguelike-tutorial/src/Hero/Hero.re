type race =
  | Goblin
  | Human
  | Dwarf;

type gender =
  | Woman
  | Man
  | Fluid;

type hero = {
  name: string,
  race,
  gender,
};