import './App.css';

import { Board } from './components/board.jsx';

function App() {
  return (
    <Board
      rows={5}
      cols={5}
    />
  );
}

export default App;
