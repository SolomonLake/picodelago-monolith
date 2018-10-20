open GameTypes;

type action =
  | ClickSquare(string)
  | Restart;

let initialState: GameTypes.state = {
  board: [
    [Empty, Empty, Empty],
    [Empty, Empty, Empty],
    [Empty, Empty, Empty],
  ],
  gameState: Playing(Cross),
};

let component = ReasonReact.reducerComponent("Game");
let make = _children => {
  ...component,
  initialState: () => initialState,
  reducer: (action: action, state: state) =>
    ReasonReact.Update(initialState),
  render: ({state, send}) =>
    <div className="game">
      <Board
        state
        onRestart={_evt => send(Restart)}
        onMark={id => send(ClickSquare(id))}
      />
    </div>,
};