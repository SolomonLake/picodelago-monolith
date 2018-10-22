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
  x: Utils.randomRange(0, grid_width - max - 20),
  y: Utils.randomRange(0, grid_height - max - 20),
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

let generateRooms = () => {
  let numRoomTries = 20;
  for (x in 0 to numRoomTries) {
    let room = {
      x: Utils.randomRange(0, grid_width - max),
      y: Utils.randomRange(0, grid_height - max),
      height: Utils.randomRange(min, max),
      width: Utils.randomRange(min, max),
      id: "O",
    };

      /* var room = new Rect(x, y, width, height); */

      /* var overlaps = false;
      for (var other in _rooms) {
        if (room.distanceTo(other) <= 0) {
          overlaps = true;
          break;
        }
      }

      if (overlaps) continue; */
  };
};

let generateInitialGrid = () => {
  let emptyGrid: list(gridRow) =
    Belt.List.make(
      grid_height,
      Belt.List.make(grid_width, {roomType: Wall, id: " "}),
    );
  generateRooms();
};

let initialGrid = generateInitialGrid();

let component = ReasonReact.statelessComponent("Map");
let make = _children => {
  ...component,
  render: _self =>
    <div>
      {
        initialGrid
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