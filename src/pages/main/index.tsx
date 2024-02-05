import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Logo } from "../../components/shared/Logo";
import * as S from "../../styles/mainPage/Main.styles";
import { ISnake } from "../../interfaces";

const Main = () => {
  const [start, setStart] = useState(false);

  // Define game variables
  const boardRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const gridSize = 20;
  const [snakePos, setSnakePos] = useState([{ x: 10, y: 10 }]);
  let food: ISnake = generateFood();
  let direction = "right";

  // useEffect(() => {
  //   if (boardRef.current) {
  //     // Now you can use boardRef.current to access the DOM element
  //     drawSnake();
  //   }
  // }, []);

  // Draw game map, snake, food
  function draw() {
    setStart(true);
    boardRef!.current.innerHTML = "";
    drawSnake();
    drawFood();
  }

  function drawSnake() {
    console.log(snakePos);
    snakePos.forEach((segment) => {
      const snakeElement = createGameElement("div", "snake");
      setPosition(snakeElement, segment);
      boardRef?.current.appendChild(snakeElement);
    });
  }

  // Draw food functions
  function drawFood() {
    const foodElement = createGameElement("div", "food");
    setPosition(foodElement, food);
    boardRef?.current.appendChild(foodElement);
  }
  function generateFood(): ISnake {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
  }

  // Set the position of snake, of food
  function setPosition(element: HTMLElement, position: ISnake) {
    element.style.gridColumn = position.x.toString();
    element.style.gridRow = position.y.toString();
  }

  // Create a snake or food cube/div
  function createGameElement(tag: string, className: string) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  // Moving the snake
  function move() {
    let newSnakePos = [...snakePos];
    let head = { ...newSnakePos[0] };
    switch (direction) {
      case "up":
        head.y++;
        break;
      case "down":
        head.y--;
        break;
      case "left":
        head.x--;
        break;
      case "right":
        head.x++;
        break;
    }
    newSnakePos.unshift(head);
    newSnakePos.pop();
    setSnakePos(newSnakePos);
    draw();
  }

  // Test moving
  // setInterval(() => {
  //   setStart(true);
  //   move();
  //   draw();
  // }, 2000);

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
          <S.Score id="scores" onClick={move}>
            000
          </S.Score>
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
          <S.Instruction onClick={draw}>
            Press spacebar to start the game
          </S.Instruction>
        </S.GameStartInstruction>
      )}
    </>
  );
};

export default Main;
