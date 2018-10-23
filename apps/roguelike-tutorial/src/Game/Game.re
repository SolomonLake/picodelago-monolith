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
      {
        GameMenu.menu(state, (_evt, view) =>
          send(GameAction.ChangeView(view))
        )
      }
      {
        switch (state.view) {
        | Map => <MapComponent state />
        | HeroCreation => <HeroCreationComponent />
        }
      }
    </div>,
};