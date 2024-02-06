import React from "react";
import * as S from "../../styles/mainPage/Main.styles";
import { Logo } from "../shared/Logo";

const StartScreen = () => {
  return (
    <>
      <S.GameStartInstruction>
        <Logo />
        <S.Instruction>Press spacebar to start the game</S.Instruction>
      </S.GameStartInstruction>
    </>
  );
};

export default StartScreen;
