import React from "react";
import * as S from "../../styles/mainPage/Main.styles";

const ScorePanel = ({ lastHighScores, gameScores }) => {
  return (
    <S.Scores>
      <S.Score id="scores">
        {" "}
        {gameScores >= 10 || gameScores >= 100
          ? "0" + gameScores
          : "00" + gameScores}
      </S.Score>
      <S.HighScore id="highScores">
        {lastHighScores >= 10 || lastHighScores >= 100
          ? "0" + lastHighScores
          : "00" + lastHighScores}
      </S.HighScore>
    </S.Scores>
  );
};

export default ScorePanel;
