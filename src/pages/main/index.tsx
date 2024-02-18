import { useEffect, useRef, useState } from "react";
import * as S from "../../styles/mainPage/Main.styles";
import { ISnake } from "../../interfaces";
import StartScreen from "../../components/startScreen/StartScreen";
import GameOverScreen from "../../components/gameOver/GameOverScreen";
import { useDispatch, useSelector } from "react-redux";
import { setHighScore } from "../../store/actions/creators/game";
import { highScoreSelector } from "../../store/selectors/game";
import ScorePanel from "../../components/scorePanel/ScorePanel";

const Main = () => {
  const dispatch = useDispatch();
  const lastHighScores = useSelector(highScoreSelector);

  const [start, setStart] = useState(false);
  const [gameOver, setGameIsOver] = useState(false);
  const [direction, setDirection] = useState("right");
  const [gameSpeedDelay, setGameSpeedDelay] = useState(200);
  const [gameScores, setGameScores] = useState(0);
  const [newHighScoreMessage, setNewHighScoreMessage] = useState(false);

  // Define game variables
  let gameInterval = useRef<NodeJS.Timeout | undefined>(undefined);
  const boardRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const gridSize = 20;

  // Snake and food position state
  const [snakePos, setSnakePos] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(generateFood);

  useEffect(() => {
    if (start) {
      gameInterval.current = setInterval(() => {
        move(direction);
        checkCollision();
        draw();
      }, gameSpeedDelay); // Interval time in milliseconds
    }
    if (!start) {
      boardRef!.current.innerHTML = "";
    }
    return () => clearInterval(gameInterval.current); // Clear the interval on component unmount
  }, [start, snakePos]);

  // Draw game map, snake, food
  function draw() {
    if (boardRef.current) {
      boardRef!.current.innerHTML = "";
    }
    drawSnake();
    drawFood();
  }
  // Draw Snake
  function drawSnake() {
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
    if (boardRef.current) {
      boardRef?.current.appendChild(foodElement);
    }
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
  const move = (direction: string) => {
    let newSnakePos = [...snakePos];
    let head = { ...newSnakePos[0] };
    switch (direction) {
      case "down":
        head.y++;
        break;
      case "up":
        head.y--;
        break;
      case "left":
        head.x--;
        break;
      case "right":
        head.x++;
        break;
    }

    setSnakePos(newSnakePos);
    newSnakePos.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
      increaseSpeed();
      clearInterval(gameInterval.current);
      setGameScores(gameScores + 1);
    } else {
      newSnakePos.pop();
    }
  };

  // Detect keydown function for start and handle snake moving direction
  useEffect(() => {
    window.addEventListener("keydown", detectKeyDown, true);
  });

  const detectKeyDown = (event: KeyboardEvent) => {
    if (
      (gameOver && event.key === " ") ||
      (gameOver && event.code === "Space")
    ) {
      restartGame();
    }
    if ((!start && event.key === " ") || (!start && event.code === "Space")) {
      setStart(true);
      setNewHighScoreMessage(false);
    } else {
      switch (event.key) {
        case "ArrowUp":
          setDirection("up");
          break;
        case "ArrowDown":
          setDirection("down");
          break;
        case "ArrowRight":
          setDirection("right");
          break;
        case "ArrowLeft":
          setDirection("left");
      }
    }
  };

  const increaseSpeed = () => {
    if (gameSpeedDelay > 150) {
      setGameSpeedDelay(gameSpeedDelay - 5);
    }
    if (gameSpeedDelay > 100) {
      setGameSpeedDelay(gameSpeedDelay - 3);
    }
    if (gameSpeedDelay > 50) {
      setGameSpeedDelay(gameSpeedDelay - 2);
    }
    if (gameSpeedDelay > 25) {
      setGameSpeedDelay(gameSpeedDelay - 1);
    }
  };

  const checkCollision = () => {
    const head = snakePos[0];

    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
      gameIsOver();
    }
    for (let i = 1; i < snakePos.length; i++) {
      if (head.x === snakePos[i].x && head.y === snakePos[i].y) {
        gameIsOver();
      }
    }
  };

  const gameIsOver = () => {
    setGameIsOver(true);
    setStart(false);
    setSnakePos([{ x: 10, y: 10 }]);
    setGameScores(0);

    if (gameScores > lastHighScores) {
      dispatch(setHighScore(gameScores));
      setNewHighScoreMessage(true);
    }
  };

  const restartGame = () => {
    setFood(generateFood());
    setStart(true);
    setGameIsOver(false);
    clearInterval(gameInterval.current);
    setGameSpeedDelay(200);
  };

  return (
    <>
      <S.Container>
        <ScorePanel gameScores={gameScores} lastHighScores={lastHighScores} />
        <S.GameBorderExternal>
          <S.GameBorderInternal>
            <S.GameBorderInsideInternal>
              <S.GameBoard ref={boardRef} id="game-board"></S.GameBoard>
            </S.GameBorderInsideInternal>
          </S.GameBorderInternal>
        </S.GameBorderExternal>
      </S.Container>
      {!start && !gameOver && <StartScreen />}
      {!start && gameOver && (
        <GameOverScreen
          newHighScoreMessage={newHighScoreMessage}
          lastHighScores={lastHighScores}
        />
      )}
    </>
  );
};

export default Main;
