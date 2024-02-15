import * as S from "../../styles/mainPage/Main.styles";
import { GameOver } from "../shared/Logo";

const GameOverScreen = () => {
  return (
    <>
      <S.GameStartInstruction>
        <GameOver />
        <S.Instruction>Press spacebar to restart</S.Instruction>
      </S.GameStartInstruction>
    </>
  );
};

export default GameOverScreen;
