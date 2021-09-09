import React from 'react';

import { Cell } from './cell.jsx';

const arrayClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

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

export const Board = ({ rows, cols, cellSize }) => {
  const [cells, setCells] = React.useState(initCells(rows, cols));

  const handleCellClick = (i, j) => {
    const newCells = arrayClone(cells);
    newCells[j][i] = 1;
    setCells(newCells);
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
            />
          )
        })
      })}
    </svg>
  );
};
