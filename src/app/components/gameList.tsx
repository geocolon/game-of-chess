// components/GameList.js

import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../reducers';
import { fetchGames } from '../actions/gameActions';
import { Game } from './types';

// Define props type for GameList component
// Define props type for GameList component
type Props = ConnectedProps<typeof connector>;
// type Props = PropsFromRedux;

const GameList: React.FC<Props> = ({ games, fetchGames }) => {
  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <div>
      <h1>Games</h1>
      {games.map((game: Game) => (
        <div key={game.id}>
          <h2>{game.gameName}</h2>
          <p>Player 1: {game.player1}</p>
          <p>Player 2: {game.player2}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  games: state.gameReducer.games,
});


// Define connector to connect component to Redux store
const connector = connect(mapStateToProps, { fetchGames });

// Define type for props coming from Redux
type PropsFromRedux = ConnectedProps<typeof connector>;

// Export connected component
export default connector(GameList);