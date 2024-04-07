import axios, { AxiosError } from 'axios';

export const savePlayerNames = (Player1: string, Player2: string) => async (dispatch: any) => {
    try {
        // Check if player names are empty or null
        if (!Player1 || !Player2) {
            throw new Error('Player names cannot be empty');
        }

        // Check the format of the request body
        if (typeof Player1 !== 'string' || typeof Player2 !== 'string') {
            throw new Error('Invalid request body format');
        }

        // Make the API call to save the player names
        const response = await axios.post('http://localhost:8080/games', 
        { 
            Player1, 
            Player2, 
            Moves: [], 
            GameName: `${Player1} & ${Player2}` 
        });
        console.log('Response data:', response.data); // Log the response data
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