open GameTypes;

let component = ReasonReact.statelessComponent("Square");

let isFinished = (value: gameState) =>
  switch (value) {
  | Winner(_) => true
  | _ => false
  };

let toValue = (field: field) =>
  switch (field) {
  | Marked(Cross) => "X"
  | Marked(Circle) => "O"
  | Empty => ""
  };

let getClass = (gameState: GameTypes.gameState, field: field) =>
  switch (gameState) {
  | Winner(player) => field == Marked(player) ? "winner square" : "square"
  | _ => "square"
  };

let make =
    (
      ~value: GameTypes.field,
      ~gameState: GameTypes.gameState,
      ~onMark,
      _children,
    ) => {
  ...component,
  render: _self =>
    <button
      className={getClass(gameState, value)}
      disabled={gameState |> isFinished}
      onClick={_evt => onMark()}>
      {value |> toValue |> ReasonReact.string}
    </button>,
};