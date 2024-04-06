import axios from 'axios';
import {
  POST_GAME_REQUEST,
  POST_GAME_SUCCESS,
  POST_GAME_FAILURE
} from './actionTypes';

export const createGameRequest = () => ({
  type: POST_GAME_REQUEST
});

export const createGameSuccess = () => ({
  type: POST_GAME_SUCCESS
});

export const createGameFailure = (error: string) => ({
  type: POST_GAME_FAILURE,
  payload: error
});

export const createGame = () => async (dispatch: any) => {
  try {
    dispatch(createGameRequest());
    const response = await axios.post('http://localhost:8080/games');
    dispatch(createGameSuccess());
    console.log('Game created successfully:', response.data);
  } catch (error: any) {
    dispatch(createGameFailure(error.message));
    console.error('Error creating game:', error.message);
  }
};