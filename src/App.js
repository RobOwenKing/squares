import './App.css';

import { Board } from './components/board.jsx';

function App() {
  return (
    <Board
      rows={5} cols={7}
      cellSize={32}
    />
  );
}

export default App;
