import { SET_SCORES } from "../types/game";

export const setHighScore = (highScores: number) => ({
  type: SET_SCORES,
  payload: highScores,
});
