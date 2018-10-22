open MapConfig;

type room = {
  xStart: int,
  yStart: int,
  yEnd: int,
  xEnd: int,
  id: string,
};

let min = room_size_range.min;
let max = room_size_range.max;

type roomType =
  | Floor
  | Wall;

type gridField = {
  roomType,
  id: string,
};

type gridRow = list(gridField);

let placeCells = (grid, {xStart, yStart, xEnd, yEnd, id}, roomType) =>
  grid
  |> List.mapi((yIndex: int, row: gridRow) =>
       row
       |> List.mapi((xIndex: int, field: gridField) => {
            let yInsideRange = yIndex > yStart && yIndex < yEnd;
            let xInsideRange = xIndex > xStart && xIndex < xEnd;
            yInsideRange && xInsideRange ? {roomType, id} : field;
          })
     );

let rec roomOverlaps = (grid: list(gridRow), room, curX, curY) =>
  curX === room.xEnd && curY === room.yEnd ?
    false :
    {
      let curRow = List.nth(grid, curY);
      let curField = List.nth(curRow, curX);

      switch (curField.roomType) {
      | Wall =>
        let endOfRow = curX + 1 > room.xEnd;
        let nextX = endOfRow ? room.xStart : curX + 1;
        let nextY = endOfRow ? curY + 1 : curY;
        roomOverlaps(grid, room, nextX, nextY);
      | _ => true
      };
    };

let numRoomTriesCount = 50;
let rec generateRooms = (grid, numRoomTries) =>
  numRoomTries === numRoomTriesCount ?
    grid :
    {
      let roomX = Utils.randomRange(0, grid_width - min);
      let roomY = Utils.randomRange(0, grid_height - min);
      let xMax = grid_width - roomX > max ? max : grid_width - roomX;
      let yMax = grid_height - roomY > max ? max : grid_height - roomY;
      let room = {
        xStart: roomX,
        yStart: roomY,
        xEnd: roomX + Utils.randomRange(min, xMax),
        yEnd: roomY + Utils.randomRange(min, yMax),
        id: numRoomTries |> string_of_int,
      };

      let overlaps = roomOverlaps(grid, room, room.xStart, room.yStart);
      let newGrid = overlaps ? grid : placeCells(grid, room, Floor);
      generateRooms(newGrid, numRoomTries + 1);
    };

let generateInitialGrid = () => {
  let emptyGrid: list(gridRow) =
    Belt.List.make(
      grid_height,
      Belt.List.make(grid_width, {roomType: Wall, id: " "}),
    );
  generateRooms(emptyGrid, 0);
};

let start = Js.Date.now();
let initialGrid = generateInitialGrid();
Js.log2(
  "generated map in x millaseconds=",
  (Js.Date.now() |> int_of_float) - (start |> int_of_float),
);

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