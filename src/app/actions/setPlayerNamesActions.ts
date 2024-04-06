import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const SET_PLAYER_NAMES = 'SET_PLAYER_NAMES';
export const SET_PLAYER_NAMES_SUCCESS = 'SET_PLAYER_NAMES_SUCCESS';
export const SET_PLAYER_NAMES_FAILURE = 'SET_PLAYER_NAMES_FAILURE';


export const setPlayerNames = (player1Name: string, player2Name: string) => async (dispatch: any) => {
  try {
    // Dispatch request action
    dispatch({ type: SET_PLAYER_NAMES });

    // Send data to endpoint
    const response = await axios.post('http://localhost:8080/games', {
      player1Name,
      player2Name
    });

    // Dispatch success action if request succeeds
    dispatch({
      type: SET_PLAYER_NAMES_SUCCESS,
      payload: response.data // Optionally, if the endpoint returns data, you can include it in the payload
    });
  } catch (error) {
    // Dispatch failure action if request fails
    dispatch({
      type: SET_PLAYER_NAMES_FAILURE,
      payload: error.message
    });
  }
};