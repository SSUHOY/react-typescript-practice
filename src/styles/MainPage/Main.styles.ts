import styled from "styled-components";

export const Container = styled.div``;

export const Scores = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Score = styled.h1``;
export const HighScore = styled.h1``;

export const GameBorderExternal = styled.div`
  border: #595f43 solid 10px;
  border-radius: 30px;
  box-shadow: inset 0 0 0 10px #595f43;
`;
export const GameBorderInternal = styled.div`
  border: #abb78a solid 8px;
  border-radius: 26px;
  box-shadow: inset 0 0 0 10px #abb78a;
`;
export const GameBorderInsideInternal = styled.div`
  border: #8b966c solid 30px;
  border-radius: 20px;
  box-shadow: inset 0 0 0 5px #8b966c;
`;
export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 20px);
  grid-template-rows: repeat(20, 20px);
  margin: 5px;
  background-color: #b5bf93;
`;

export const Instruction = styled.div`
  position: relative;
  color: #333;
  bottom: 438px;
  font-size: 28px;
  width: 300px;
  left: 74px;
  text-align: center;
  text-transform: capitalize;
  padding: 30px;
  margin: 0;
`;

export const SnakeLogo = styled.img`
  position: relative;
  bottom: 424px;
  left: 127px;
`;
