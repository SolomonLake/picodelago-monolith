type gameView =
  | Map
  | CharacterCreation;

type viewState = {view: gameView};

type state = {
  map: Map.mapGrid,
  viewState,
};