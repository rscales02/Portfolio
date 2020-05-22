import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  background: whitesmoke;
  width: 100%;
  height: 50px;

  //alignment and spacing
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10em;
  padding-left: 5%;
`;

const HeaderItem = styled.div`
  display: flexbox;
  height: 100%;
  width: 100px;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(228, 225, 225, 0.35);
  }
`;

export { Header, HeaderItem };
