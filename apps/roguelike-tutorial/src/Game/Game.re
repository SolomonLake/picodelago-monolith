open GameTypes;

let initialState = {map: Map.initialGrid, view: HeroCreation};

let currentViewButton = viewString =>
  <button disabled=true>
    {"*" ++ viewString ++ "*" |> ReasonReact.string}
  </button>;

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
      <div>
        {
          let viewButtonText = "Create Hero";
          switch (state.view) {
          | HeroCreation => currentViewButton(viewButtonText)
          | _ =>
            <button
              onClick=(_evt => send(GameAction.ChangeView(HeroCreation)))>
              {viewButtonText |> ReasonReact.string}
            </button>
          };
        }
        {
          let viewButtonText = "Open Map";
          switch (state.view) {
          | Map => currentViewButton(viewButtonText)
          | _ =>
            <button onClick=(_evt => send(GameAction.ChangeView(Map)))>
              {viewButtonText |> ReasonReact.string}
            </button>
          };
        }
      </div>
      {
        switch (state.view) {
        | Map => <MapComponent state />
        | HeroCreation => <HeroCreationComponent />
        }
      }
    </div>,
};