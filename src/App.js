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

  const scoreHandler = (currentPlayer, increment) => {
    setPlayerScores(changeIntInObject(playerScores, currentPlayer, increment));
  };

  return (
    <div>
      <h2>
        <ScoreDisplay player={1} score={playerScores[1]} />
        <ScoreDisplay player={2} score={playerScores[2]} />
      </h2>
      <Board
        rows={5} cols={5}
        cellSize={32}
        scoreHandler={scoreHandler}
      />
    </div>
  );
}

export default App;
