let component = ReasonReact.statelessComponent("Board");

let make = (~state: GameTypes.state, ~onMark, ~onRestart, _children) => {
  ...component,
  render: _self => <div className="game-board" />,
};