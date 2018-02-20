import * as React from "react";
import * as PropTypes from "prop-types";

require("./WorldMap.css");

export type Map = Array<RowOfTiles>;

export type RowOfTiles = Array<Tile>;

export type Tile = string;

const FONT_SIZE: number = 32;
const ROWS_COUNT: number = 10;
const COLS_COUNT: number = 10;

const worldMap: Map = createMap();

function createMap(): Map {
  var newMap: Array<RowOfTiles> = [];
  for (var y = 0; y < ROWS_COUNT; y++) {
    var newRow = [];
    for (var x = 0; x < COLS_COUNT; x++) {
      const newTile = createTile();
      newRow.push(newTile);
    }
    newMap.push(newRow);
  }
  return newMap;
}

function createTile(): Tile {
  return "#";
}

export const WorldMapPresentationalComponent = () => (
  <div className="map">
    {worldMap.map((row: RowOfTiles, index) => (
      <RowWorldMapPresentationalComponent key={index} mapRow={row} />
    ))}
  </div>
);

const RowWorldMapPresentationalComponent = (props: { mapRow: RowOfTiles }) => (
  <div className="map-row">
    {props.mapRow.map((tile: Tile, index: number) => (
      <TileWorldMapPresentationalComponent key={index} mapTile={tile} />
    ))}
  </div>
);

const TileWorldMapPresentationalComponent = (props: { mapTile: Tile }) => (
  <div className="map-tile"> {props.mapTile} </div>
);
