open GameTypes;

let initialState = {map: Map.initialGrid, view: HeroCreation};

let component = ReasonReact.reducerComponent("Game");
let make = _children => {
  ...component,
  initialState: () => initialState,

  reducer: (action: GameAction.action, state: state) =>
    switch (action) {
    | ChangeView(view) => ReasonReact.Update({...state, view})
    },
  render: ({state, send}) =>
    <div>
      <button onClick={_evt => send(GameAction.ChangeView(HeroCreation))}>
        {"Create Hero" |> ReasonReact.string}
      </button>
      <button onClick={_evt => send(GameAction.ChangeView(Map))}>
        {"Open Map" |> ReasonReact.string}
      </button>
      {
        switch (state.view) {
        | Map => <MapComponent state />
        | HeroCreation => <HeroCreationComponent />
        }
      }
    </div>,
};