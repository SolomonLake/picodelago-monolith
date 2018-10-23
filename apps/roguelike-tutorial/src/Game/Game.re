let component = ReasonReact.statelessComponent("Game");
let make = _children => {
  ...component,
  render: _self => <div> <MapComponent /> </div>,
};