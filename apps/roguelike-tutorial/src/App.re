[%bs.raw {|require('./App.sass')|}];

[@bs.module] external logo: string = "./static/images/logo.svg";

let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self => <div> <Game /> </div>,
};