export interface ISnake {
  x: number;
  y: number;
}
export interface IFood {
  x2: number;
  y2: number;
}

export interface ICreateGameElement {
  tag: HTMLElement;
  className: HTMLElement;
}

export interface IGameInitModel {
  highScores: number;
}
export interface IGameAction {
  type: string;
  payload: {
    highScores: number;
  };
}
