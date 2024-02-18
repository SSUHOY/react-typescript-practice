import * as S from "../../styles/mainPage/Main.styles";
import { GameOver } from "../shared/Logo";

const GameOverScreen = ({ newHighScoreMessage, lastHighScores }) => {
  return (
    <>
      <S.GameStartInstruction>
        <GameOver />
        {newHighScoreMessage && (
          <S.HighScoreAlert>New high score!</S.HighScoreAlert>
        )}
        <S.Instruction>Press spacebar to restart</S.Instruction>
      </S.GameStartInstruction>
    </>
  );
};

export default GameOverScreen;
