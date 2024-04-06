import axios, { AxiosError } from 'axios';


export const savePlayerNames = (player1Name: string, player2Name: string) => async (dispatch: any) => {
    try {
      // Check if player names are empty
      if (!player1Name || !player2Name) {
        throw new Error('Player names cannot be empty');
      }
  
      // Make the API call to save the player names
      const response = await axios.post('http://localhost:8080/games', { player1Name, player2Name });
  
      // Dispatch an action to indicate that the player names have been successfully saved
      dispatch({ type: 'SAVE_PLAYER_NAMES_SUCCESS', payload: response.data });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // Axios error response
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.data || 'Unknown error occurred';
        console.error('Error saving player names:', errorMessage);
        dispatch({ type: 'SAVE_PLAYER_NAMES_FAILURE', payload: errorMessage });
      } else {
        // Other errors
        console.error('Error saving player names:', error.message);
        dispatch({ type: 'SAVE_PLAYER_NAMES_FAILURE', payload: error.message });
      }
    }
  };