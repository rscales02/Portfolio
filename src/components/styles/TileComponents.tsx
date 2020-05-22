import styled from "styled-components";

const TileContainer = styled.div`
  cursor: pointer;
  height: auto;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (min-width: 1024px) {
    height: auto;
    width: 360px;
    align-self: flex-start;
  }
`;

const TileImg = styled.img`
  width: 45vmin;
  max-width: 100%;
`;

const TileTitle = styled.h2`
  margin-top: 16px;
  font-size: 26px;
  line-height: 35px;
  display: flex;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    padding-top: 36px;
    margin-bottom: 0;
  }
`;

const TileContent = styled.p`
  display: none;
  position: relative;

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    display: inline;
    font-size: 14px;
    line-height: 19px;
    text-align: justify;
    opacity: 0.8;
  }
`;

export { TileContainer, TileImg, TileTitle, TileContent };
