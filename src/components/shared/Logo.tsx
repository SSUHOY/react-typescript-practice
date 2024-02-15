import { SnakeLogo } from "../../styles/mainPage/Main.styles";

export const Logo = () => {
  return (
    <SnakeLogo
      src={require("./../../assets/images/snake-game-ai-gen.png")}
      alt="Snake-logo"
    />
  );
};
export const GameOver = () => {
  return (
    <SnakeLogo
      src={require("./../../assets/images/snake-game-gameover.png")}
      alt="Game-over"
    />
  );
};
