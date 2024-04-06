// reducers/gameReducer.js
import {
 POST_GAME_REQUEST,
 POST_GAME_SUCCESS,
 POST_GAME_FAILURE
} from '../actions/actionTypes';

interface GameState {
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  loading: false,
  error: null
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_GAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case POST_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case POST_GAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default gameReducer;