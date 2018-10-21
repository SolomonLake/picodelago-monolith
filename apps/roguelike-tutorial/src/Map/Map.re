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

let randomRange = (min, max) => 

let firstRoom = {
  x: Random.int(grid_width - max - 15),
  y: Random.int(grid_height - max - 15),
  height: Random.int(room_size_max),
  width: Random.int(room_size_max),
  /* we give an id that we will use for visualization purposes later */
  id: "O",
};
/* delete the console log after testing it */
Js.log(firstRoom);

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
    Belt.List.make(grid_width, {roomType: Wall, id: ""}),
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
/* for (let i = y; i < y + height; i++) {
       for (let j = x; j < x + width; j++) {
         /* the {} means that we are passing an object with 2 props, type and id
         since we use ES6 we  dont need to say {type: type, id: id} */
         grid[i][j] = {type, id};
       }
     }
     return grid;
   }; */

let grid = placeCells(initialGrid, firstRoom, Floor);

let component = ReasonReact.statelessComponent("Map");
let make = _children => {
  ...component,
  render: _self => <div> {ReasonReact.string("X")} </div>,
};