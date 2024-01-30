import { useEffect, useRef } from "react";
import { Logo } from "../../components/shared/Logo";
import * as S from "../../styles/MainPage/Main.styles";

const Main = () => {
  const boardRef = useRef(null);
  useEffect(() => {
    const element = boardRef.current;
    console.log(element);
  }, []);

  return (
    <>
      <S.Container>
        <S.Scores>
          <S.Score id="scores">000</S.Score>
          <S.HighScore id="highScores">000</S.HighScore>
        </S.Scores>
        <S.GameBorderExternal>
          <S.GameBorderInternal>
            <S.GameBorderInsideInternal>
              <S.GameBoard ref={boardRef} id="game-board">
              </S.GameBoard>
            </S.GameBorderInsideInternal>
          </S.GameBorderInternal>
        </S.GameBorderExternal>
      </S.Container>
      <Logo />
      <S.Instruction>Press spacebar to start the game</S.Instruction>
    </>
  );
};

export default Main;
