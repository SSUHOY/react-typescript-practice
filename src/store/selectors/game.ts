export const highScoreSelector = (state: { game: { highScores: number } }) =>
  state.game.highScores;
