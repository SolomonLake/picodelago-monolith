open GameTypes;

let initialState = {
  map: Map.initialGrid,
  viewState: {
    view: Map,
  },
};

let component = ReasonReact.reducerComponent("Game");
let make = _children => {
  ...component,
  initialState: () => initialState,

  reducer: (action: GameAction.action, state: state) =>
    switch (action) {
    | Unit => ReasonReact.Update(state)
    },
  render: ({state, send}) => <div> <MapComponent state /> </div>,
};