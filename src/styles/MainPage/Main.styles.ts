import styled from "styled-components";

export const Container = styled.div`
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
  padding-bottom: 36px;
`;

export const PostsBox = styled.div`
  background-color: black;
`;
export const PostsItems = styled.div`
  width: 1200px;
  height: 320px;
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
`;
