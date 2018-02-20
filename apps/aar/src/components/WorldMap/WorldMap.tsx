import * as React from "react";

require("./WorldMap.css");

export type Map = Array<RowOfTiles>;

export type RowOfTiles = Array<Tile>;

export type Tile = {
  position: TilePosition;
  char: string;
};

type TilePosition = {
  row: number;
  col: number;
};

const FONT_SIZE: number = 32;
const ROWS_COUNT: number = 20;
const COLS_COUNT: number = 20;
const BASE_LOCATION: TilePosition = {
  row: Math.ceil(ROWS_COUNT / 2),
  col: Math.ceil(COLS_COUNT / 2)
};

const worldMap: Map = createMap();

function createMap(): Map {
  var newMap: Array<RowOfTiles> = [];
  for (var y = 0; y < ROWS_COUNT; y++) {
    var newRow = [];
    for (var x = 0; x < COLS_COUNT; x++) {
      const tilePosition: TilePosition = { row: y, col: x };
      const newTile = createTile(tilePosition);
      newRow.push(newTile);
    }
    newMap.push(newRow);
  }
  return newMap;
}

function createTile(tilePosition: TilePosition): Tile {
  const tile = {
    position: tilePosition,
    char: "#"
  };
  if (
    tilePosition.row === BASE_LOCATION.row &&
    tilePosition.col === BASE_LOCATION.col
  ) {
    return { ...tile, char: "T" };
  } else {
    return tile;
  }
}

export const WorldMapViewComponent = () => (
  <div className="map">
    {worldMap.map((row: RowOfTiles, index) => (
      <RowWorldMapViewComponent key={index} mapRow={row} />
    ))}
  </div>
);

const RowWorldMapViewComponent = (props: { mapRow: RowOfTiles }) => (
  <div className="map-row">
    {props.mapRow.map((tile: Tile, index: number) => (
      <TileWorldMapViewComponent key={index} mapTile={tile} />
    ))}
  </div>
);

const TileWorldMapViewComponent = (props: { mapTile: Tile }) => (
  <div className="map-tile"> {props.mapTile.char} </div>
);
