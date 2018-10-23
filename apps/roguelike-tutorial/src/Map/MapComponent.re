open Map;

let component = ReasonReact.statelessComponent("MapComponent");
let make = _children => {
  ...component,
  render: _self =>
    <div>
      {
        Map.initialGrid
        |> List.mapi((index, row) =>
             <div className="row" key={"row" ++ (index |> string_of_int)}>
               {
                 row
                 |> List.mapi((ind, field) =>
                      <div
                        className={field.tileType === Floor ? "floor" : "wall"}
                        key={ind |> string_of_int}>
                        {field.id |> ReasonReact.string}
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