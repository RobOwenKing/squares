import './App.css';

import React from 'react';

import { Board } from './components/board.jsx';
import { ScoreDisplay } from './components/score_display.jsx';

const changeIntInObject = (object, key, increment) => {
  const newObject = {...object};
  newObject[key] += increment;
  return newObject;
};

function App() {
  const [playerScores, setPlayerScores] = React.useState({1: 0, 2: 0});
  const playerColours = {
    1: '#1E9BF0',
    2: '#F34423'
  };
  const [currentPlayer, setCurrentPlayer] = React.useState(1);

  const scoreHandler = (currentPlayer, increment) => {
    setPlayerScores(changeIntInObject(playerScores, currentPlayer, increment));
  };

  const toggleCurrentPlayer = () => {
    setCurrentPlayer(3 - currentPlayer);
  }

  return (
    <div>
      <h2>
        <ScoreDisplay player={1} score={playerScores[1]} />
        <ScoreDisplay player={2} score={playerScores[2]} />
      </h2>
      <Board
        rows={7} cols={7}
        cellSize={32}
        scoreHandler={scoreHandler}
        playerColours={playerColours}
        currentPlayer={currentPlayer}
        toggleCurrentPlayer={toggleCurrentPlayer}
      />
    </div>
  );
}

export default App;
