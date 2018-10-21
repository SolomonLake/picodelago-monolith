open MapConfig;

type room = {
  x: int,
  y: int,
  height: int,
  width: int,
  id: string,
};

let min = room_size_range.min;
let max = room_size_range.max;

let firstRoom = {
  x: Utils.randomRange(0, grid_width - max - 15),
  y: Utils.randomRange(0, grid_height - max - 15),
  height: Utils.randomRange(min, max),
  width: Utils.randomRange(min, max),
  id: "O",
};

type roomType =
  | Floor
  | Wall;

type gridField = {
  roomType,
  id: string,
};

type gridRow = list(gridField);

let initialGrid: list(gridRow) =
  Belt.List.make(
    grid_height,
    Belt.List.make(grid_width, {roomType: Wall, id: " "}),
  );

let placeCells = (grid, {x, y, width, height, id}, roomType) =>
  grid
  |> List.mapi((yIndex: int, row: gridRow) =>
       row
       |> List.mapi((xIndex: int, field: gridField) => {
            let yInsideRange = yIndex > y && yIndex < y + height;
            let xInsideRange = xIndex > x && xIndex < x + width;
            yInsideRange && xInsideRange ? {roomType, id} : field;
          })
     );

let grid = placeCells(initialGrid, firstRoom, Floor);

let component = ReasonReact.statelessComponent("Map");
let make = _children => {
  ...component,
  render: _self =>
    <div>
      {
        grid
        |> List.mapi((index, row) =>
             <div className="row" key={"row" ++ (index |> string_of_int)}>
               {
                 row
                 |> List.mapi((ind, field) =>
                      <div
                        className={field.roomType === Floor ? "floor" : "wall"}
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