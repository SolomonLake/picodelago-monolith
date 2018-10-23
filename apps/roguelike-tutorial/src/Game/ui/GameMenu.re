open GameTypes;

let currentViewButton = viewString =>
  <button disabled=true>
    {"*" ++ viewString ++ "*" |> ReasonReact.string}
  </button>;

let menu = (state: GameTypes.state, changeView) =>
  <div>
    {
      let viewButtonText = "Create Hero";
      switch (state.view) {
      | HeroCreation => currentViewButton(viewButtonText)
      | _ =>
        <button onClick={changeView(_, HeroCreation)}>
          {viewButtonText |> ReasonReact.string}
        </button>
      };
    }
    {
      let viewButtonText = "Open Map";
      switch (state.view) {
      | Map => currentViewButton(viewButtonText)
      | _ =>
        <button onClick={changeView(_, Map)}>
          {viewButtonText |> ReasonReact.string}
        </button>
      };
    }
  </div>;