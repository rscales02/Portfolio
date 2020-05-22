import * as React from "react";

import Tile from "../page-components/Tile";
import { Flex } from "../styles/PageComponents";

export interface PortfolioProps {}

const Portfolio: React.SFC<PortfolioProps> = () => {
  return (
    <div>
      <Flex>
        <Tile
          id="test6"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          description="test portfolio"
          name="test portfolio"
        ></Tile>
        <Tile
          id="test5"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          description="test portfolio"
          name="test portfolio"
        ></Tile>
        <Tile
          id="test4"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          description="test portfolio"
          name="test portfolio"
        ></Tile>
        <Tile
          id="test3"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          description="test portfolio"
          name="test portfolio"
        ></Tile>
        <Tile
          id="test2"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          description="test portfolio"
          name="test portfolio"
        ></Tile>
        <Tile
          id="test1"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          description="test portfolio"
          name="test portfolio"
        ></Tile>
      </Flex>
    </div>
  );
};

export default Portfolio;
