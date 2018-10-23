type view =
  | Map
  | HeroCreation;

type state = {
  map: Map.mapGrid,
  view,
};