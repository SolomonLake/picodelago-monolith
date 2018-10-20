[%bs.raw {|require('./App.css')|}];

[@bs.module] external logo: string = "./static/images/logo.svg";

let component = ReasonReact.statelessComponent("App");
let make = _children => {
  ...component,
  render: _self =>
    <div>
      <div className="title"> {ReasonReact.string("Tic Tac Toe")} </div>
      <Game />
    </div>,
};