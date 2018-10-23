open Hero;

type action =
  | Unit
  | SetName(string)
  | SelectRace(race)
  | SelectGender(gender);

type state = hero;

let initialState = {name: "Rooni", race: Human, gender: Fluid};

let component = ReasonReact.reducerComponent("HeroCreationComponent");
let make = _children => {
  ...component,
  initialState: () => initialState,
  reducer: (action: action, state) =>
    ReasonReact.Update(
      switch (action) {
      | Unit => state
      | SetName(name) => {...state, name}
      | SelectRace(race) => {...state, race}
      | SelectGender(gender) => {...state, gender}
      },
    ),

  render: ({state, send}) =>
    <div>
      <div>
        {"Name: " |> ReasonReact.string}
        <input
          type_="text"
          value={state.name}
          /* value="Hello" */
          onChange={
            evt => {
              let name = Utils.getValue(evt);
              send(SetName(name));
            }
          }
        />
      </div>
      <div>
        {"Race: " |> ReasonReact.string}
        <input
          type_="radio"
          checked={state.race === Human}
          onChange={_evt => send(SelectRace(Human))}
        />
        {"Human" |> ReasonReact.string}
        <input
          type_="radio"
          checked={state.race === Dwarf}
          onChange={_evt => send(SelectRace(Dwarf))}
        />
        {"Dwarf" |> ReasonReact.string}
      </div>
      <div>
        {"Gender: " |> ReasonReact.string}
        <input
          type_="radio"
          checked={state.gender === Fluid}
          onChange={_evt => send(SelectGender(Fluid))}
        />
        {"Fluid" |> ReasonReact.string}
        <input
          type_="radio"
          checked={state.gender === Woman}
          onChange={_evt => send(SelectGender(Woman))}
        />
        {"Woman" |> ReasonReact.string}
      </div>
    </div>,
};