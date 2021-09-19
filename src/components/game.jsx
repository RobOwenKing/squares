import React from 'react';

import { Board } from './board.jsx';
import { ScoreDisplay } from './score_display.jsx';

const changeIntInObject = (object, key, increment) => {
  const newObject = {...object};
  newObject[key] += increment;
  return newObject;
};

export const Game = () => {
  const [playerScores, setPlayerScores] = React.useState({1: 0, 2: 0});
  const playerColours = {
    1: '#1E9BF0',
    2: '#F34423'
  };
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [playerIdentities, setPlayerIdentities] = React.useState({1: 'human', 2: 'ai1'});

  const scoreHandler = (currentPlayer, increment) => {
    setPlayerScores(changeIntInObject(playerScores, currentPlayer, increment));
  };

  return (
    <div id="game">
      <h2>
        <ScoreDisplay score={playerScores[1]} /> - <ScoreDisplay score={playerScores[2]} />
      </h2>
      <Board
        rows={7} cols={7}
        cellSize={32}
        scoreHandler={scoreHandler}
        playerColours={playerColours}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        playerIdentities={playerIdentities}
      />
    </div>
  );
};
