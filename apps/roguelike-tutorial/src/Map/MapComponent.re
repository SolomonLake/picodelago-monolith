let component = ReasonReact.statelessComponent("MapComponent");
let make = (~state: GameTypes.state, _children) => {
  ...component,
  render: _self =>
    <div>
      {
        state.map
        |> List.mapi((index, row) =>
             <div className="row" key={"row" ++ (index |> string_of_int)}>
               {
                 row
                 |> List.mapi((ind, tile: Map.mapTile) =>
                      <div
                        className={tile.tileType === Floor ? "floor" : "wall"}
                        key={ind |> string_of_int}>
                        {tile.id |> ReasonReact.string}
                      </div>
                    )
                 |> Array.of_list
                 |> ReasonReact.array
               }
             </div>
           )
        |> Array.of_list
        |> ReasonReact.array
      }
    </div>,
};