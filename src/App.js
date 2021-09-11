import './App.css';

import { Board } from './components/board.jsx';
import { ScoreDisplay } from './components/score_display.jsx';

function App() {
  return (
    <div>
      <h2>
        <ScoreDisplay player={1} score={0} />
        <ScoreDisplay player={2} score={0} />
      </h2>
      <Board
        rows={5} cols={5}
        cellSize={32}
      />
    </div>
  );
}

export default App;
