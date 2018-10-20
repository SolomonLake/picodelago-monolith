open GameTypes;

let setStatus = gameState =>
  switch (gameState) {
  | Playing(Cross) => "Cross is playing"
  | Playing(Circle) => "Circle is playing"
  | Winner(Cross) => "Cross won"
  | Winner(Circle) => "Circle won"
  | Draw => "Draw"
  };

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
      <div className="status">
        {state.gameState |> setStatus |> ReasonReact.string}
      </div>
      {
        switch (state.gameState) {
        | Playing(_) => ReasonReact.null
        | _ =>
          <button className="restart" onClick=onRestart>
            {ReasonReact.string("Restart")}
          </button>
        }
      }
    </div>,
};