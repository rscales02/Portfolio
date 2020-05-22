import * as React from "react";
import {
  TileContainer,
  TileImg,
  TileTitle,
  TileContent
} from "../styles/TileComponents";

export interface TileProps {
  className?: string;
  id: string;
  src?: string;
  name?: string;
  description?: string;
  onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): HTMLElement | null;
}

const Tile: React.SFC<TileProps> = props => {
  return (
    <TileContainer
      className="tile-container"
      onClick={props.onClick}
      id={props.id}
    >
      <TileImg className="tile-img" src={props.src}></TileImg>
      <TileTitle className="tile-title">{props.name}</TileTitle>
      <TileContent className="tile-content">{props.description}</TileContent>
    </TileContainer>
  );
};

export default Tile;
