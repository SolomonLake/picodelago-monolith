open MapConfig;

type room = {
  xStart: int,
  yStart: int,
  yEnd: int,
  xEnd: int,
  id: string,
};

type tileType =
  | Floor
  | Wall;

type mapTile = {
  tileType,
  id: string,
};

type mapRow = list(mapTile);
type mapGrid = list(mapRow);

let placeCells = (grid, {xStart, yStart, xEnd, yEnd, id}, tileType) =>
  grid
  |> List.mapi((yIndex: int, row: mapRow) =>
       row
       |> List.mapi((xIndex: int, field: mapTile) => {
            let yInsideRange = yIndex > yStart && yIndex < yEnd;
            let xInsideRange = xIndex > xStart && xIndex < xEnd;
            yInsideRange && xInsideRange ? {tileType, id} : field;
          })
     );

let rec roomOverlaps = (grid: mapGrid, room, curX, curY) =>
  curX === room.xEnd && curY === room.yEnd ?
    false :
    {
      let curRow = List.nth(grid, curY);
      let curField = List.nth(curRow, curX);

      switch (curField.tileType) {
      | Wall =>
        let endOfRow = curX + 1 > room.xEnd;
        let nextX = endOfRow ? room.xStart : curX + 1;
        let nextY = endOfRow ? curY + 1 : curY;
        roomOverlaps(grid, room, nextX, nextY);
      | _ => true
      };
    };

let roomMin = room_size_range.min;
let roomMax = room_size_range.max;
let numRoomTriesCount = 50;
let rec generateRooms = (grid, numRoomTries) =>
  numRoomTries === numRoomTriesCount ?
    grid :
    {
      let roomX = Utils.randomRange(0, grid_width - roomMin);
      let roomY = Utils.randomRange(0, grid_height - roomMin);
      let xMax = grid_width - roomX > roomMax ? roomMax : grid_width - roomX;
      let yMax = grid_height - roomY > roomMax ? roomMax : grid_height - roomY;
      let room = {
        xStart: roomX,
        yStart: roomY,
        xEnd: roomX + Utils.randomRange(roomMin, xMax),
        yEnd: roomY + Utils.randomRange(roomMin, yMax),
        id: numRoomTries |> string_of_int,
      };

      let overlaps = roomOverlaps(grid, room, room.xStart, room.yStart);
      let newGrid = overlaps ? grid : placeCells(grid, room, Floor);
      generateRooms(newGrid, numRoomTries + 1);
    };

let generateInitialGrid = () => {
  let emptyGrid: mapGrid =
    Belt.List.make(
      grid_height,
      Belt.List.make(grid_width, {tileType: Wall, id: " "}),
    );
  generateRooms(emptyGrid, 0);
};

let start = Js.Date.now();
let initialGrid = generateInitialGrid();
Js.log2(
  "generated map in x millaseconds=",
  (Js.Date.now() |> int_of_float) - (start |> int_of_float),
);