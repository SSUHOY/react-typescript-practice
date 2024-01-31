import { useEffect, useRef, useState } from "react";
import { Logo } from "../../components/shared/Logo";
import * as S from "../../styles/mainPage/Main.styles";
import { ISnake } from "../../interfaces";

const Main = () => {
  const [start, setStart] = useState(false);

  const boardRef = useRef<HTMLDivElement>(null);
  const gridSize = 20;

  // Define game variables
  let snake: ISnake[] = [{ x: 10, y: 12 }];
  // ИСПРАВИТЬ!
  let food: ISnake = generateFood();

  function drawSnake() {
    snake.forEach((segment) => {
      const snakeElement = createGameElement("div", "snake");
      setPosition(snakeElement, segment);
      if (boardRef.current) {
        boardRef.current.appendChild(snakeElement);
        setStart(true);
      }
    });
  }

  // Draw food functions
  function drawFood() {
    const foodElement = createGameElement("div", "food");
    setPosition(foodElement, food);
    if (boardRef.current) {
      boardRef.current.appendChild(foodElement);
      generateFood();
    }
  }
  function generateFood(): ISnake {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return { x, y };
  }
  // Create a snake or food cube/div
  function createGameElement(tag: string, className: string) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  // Set the position of snake, of food
  function setPosition(element: HTMLElement, position: ISnake) {
    element.style.gridColumn = position.x.toString();
    element.style.gridRow = position.y.toString();
  }

  // const handleSpaceBar = (e: KeyboardEvent<HTMLInputElement>) => {
  //   const { key } = e;
  //   if (key === 'Space') {
  //     drawSnake();
  //   }
  // };

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
              <S.GameBoard ref={boardRef} id="game-board"></S.GameBoard>
            </S.GameBorderInsideInternal>
          </S.GameBorderInternal>
        </S.GameBorderExternal>
      </S.Container>
      {!start && (
        <S.GameStartInstruction>
          <Logo />
          <S.Instruction onClick={drawSnake}>
            Press spacebar to start the game
          </S.Instruction>
        </S.GameStartInstruction>
      )}
    </>
  );
};

export default Main;
