import {
    SAVE_PLAYER_NAMES_SUCCESS,
    SAVE_PLAYER_NAMES_FAILURE,
    SAVE_PLAYER_NAMES_REQUEST
  } from '../actions/actionTypes';
  
  interface GameState {
    loading: boolean;
    error: string | null;
    playerNames: string[] | null; // Assuming player names will be stored as an array of strings
  }
  
  const initialState: GameState = {
    loading: false,
    error: null,
    playerNames: null
  };
  
  const gameReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SAVE_PLAYER_NAMES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case SAVE_PLAYER_NAMES_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          playerNames: action.payload // Assuming action.payload contains player names
        };
      case SAVE_PLAYER_NAMES_FAILURE:
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