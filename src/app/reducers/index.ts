// index.ts is the entry point for the reducers folder. It combines all the reducers into a single rootReducer and exports it. This rootReducer is then used in the store configuration to create the Redux store.
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';


// Combine reducers
const rootReducer = combineReducers({
  gameReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;