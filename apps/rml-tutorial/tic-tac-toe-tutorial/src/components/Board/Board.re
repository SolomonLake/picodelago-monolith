let component = ReasonReact.statelessComponent("Board");

let make = (~state: GameTypes.state, ~onMark, ~onRestart, _children) => {
  ...component,
  render: _self =>
    <div className="game-board">
      {
        state.board
        |> List.mapi((index: int, value: GameTypes.row) =>
             <BoardRow gameState={state.gameState} row=value onMark index />
           )
        |> Array.of_list
        |> ReasonReact.array
      }
    </div>,
};