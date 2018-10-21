[%bs.raw {|require('./App.css')|}];

[@bs.module] external logo: string = "./static/images/logo.svg";

let component = ReasonReact.statelessComponent("App");

let make = (~message, _children) => {
  ...component,
  render: _self => <div> <Game /> </div>,
};