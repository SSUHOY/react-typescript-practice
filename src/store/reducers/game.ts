import { IGameAction, IGameInitModel } from "../../interfaces";
import { SET_SCORES } from "../actions/types/game";

const initialState: IGameInitModel = {
  highScores: 0,
};

export default function gameReducer(state = initialState, action: IGameAction) {
  switch (action.type) {
    case SET_SCORES: {
      return {
        ...state,
        highScores: action.payload,
      }
    }
    default:
      return state;
  }
}
