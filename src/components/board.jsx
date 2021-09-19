import React from 'react';

import { Cell } from './cell.jsx';

const initCells = (rows, cols) => {
  const temp = [];

  for (let j = 0; j < rows; j += 1) {
    const latestRow = [];
    for (let i = 0; i < cols; i += 1) {
      latestRow.push(null);
    }
    temp.push(latestRow);
  }

  return temp;
};

const initEmptyCells = (rows, cols) => {
  const temp = [];

  for (let j = 0; j < rows; j += 1) {
    for (let i = 0; i < cols; i += 1) {
      temp.push([i, j]);
    }
  }

  return temp;
};

const update2DArrayEntry = (array, i, j, newValue) => {
  return array.map((row, jndex) => {
    if (j !== jndex) { return row; }
    else {
      return row.map((value, index) => {
        if (i !== index) { return value; }
        else { return newValue; }
      })
    }
  })
};

const pushIntoArrayInObject = (object, arrayKey, i, j) => {
  const newObject = {...object};
  newObject[arrayKey].push([i, j]);
  return newObject;
};

const isSquareCandidate = (distances, i, j) => {
  // Imagine we have just placed a stone and there are two others
  // One two right and one up, the other two down and one right
  // These are then going to form three vertices of a potential square
  return Math.abs(distances[i][0]) === Math.abs(distances[j][1])
    && Math.abs(distances[i][1]) === Math.abs(distances[j][0])
    // In such a triple, either both xs and ys will be to the same side of the new vertex
    // And the other pair will be one either side of the new vertex
    && (distances[i][0] * distances[i][1] * distances[j][0] * distances[j][1]) <= 0;
};

const isSquare = (distances, i , j) => {
  // Consider the distances as the two components of a vector from the new vertex
  // The potential fourth vertex would then be the sum of the other two sides away
  const neededX = distances[i][0] + distances[j][0];
  const neededY = distances[i][1] + distances[j][1];
  if (distances.some(([i, j]) => i === neededX && j === neededY)) {
    return [neededX, neededY];
  } else {
    return false;
  }
};

const testForSquares = (playerCells, newI, newJ, scoreHandler, currentPlayer) => {
  // Find the coordinate distance from the new stone to each other by that player
  const distances = playerCells.map(([i,j]) => [newI - i, newJ - j]);
  // First we look for two distances that are equal and at right angles
  // These would give us three adjacent vertices of a potential square
  for (let firstDist = 0; firstDist < distances.length - 1; firstDist += 1) {
    for (let secondDist = firstDist + 1; secondDist < distances.length; secondDist += 1) {
      // Test if we have three vertices
      if (isSquareCandidate(distances, firstDist, secondDist)) {
        // Test if we have the fourth vertex
        if (isSquare(distances, firstDist, secondDist)) {
          scoreHandler(currentPlayer, 1);
        }
      }
    }
  }
};

export const Board = ({ rows, cols, cellSize, scoreHandler, playerColours, currentPlayer, setCurrentPlayer, playerIdentities }) => {
  const [cells, setCells] = React.useState(initCells(rows, cols));
  const [emptyCells, setEmptyCells] = React.useState(initEmptyCells(rows, cols));
  const [playerCells, setPlayerCells] = React.useState({1: [], 2: []});
  const [isClickable, setIsClickable] = React.useState(true);

  const toggleCurrentPlayer = () => {
    const nextPlayer = 3 - currentPlayer;
    if (playerIdentities[nextPlayer] !== 'human') { setIsClickable(false); }
    setCurrentPlayer(nextPlayer);
  }

  const handleCellClick = (i, j) => {
    if (!isClickable) { return; }

    setPlayerCells(pushIntoArrayInObject(playerCells, currentPlayer, i, j));
    setCells(update2DArrayEntry(cells, i, j, playerColours[currentPlayer]));
    if (playerCells[currentPlayer].length >= 3) {
      testForSquares(playerCells[currentPlayer], i, j, scoreHandler, currentPlayer);
    }
    toggleCurrentPlayer();
  };

  return (
    <svg
      version="1.1" xmlns="http://www.w3.org/2000/svg"
      viewBox={`-16 -16 ${(cols * cellSize) + 32} ${(rows * cellSize) + 32}`}
    >
      {cells.map((row, j) => {
        return row.map((value, i) => {
          return (
            <Cell
              key={(j * cols) + i}
              value={value} i={i} j={j}
              cellSize={cellSize}
              clickHandler={handleCellClick}
              isClickable={isClickable}
            />
          )
        })
      })}
    </svg>
  );
};
