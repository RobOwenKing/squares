import React from 'react';

import { Cell } from './cell.jsx';

export const Board = ({ rows, cols, cellSize }) => {
  const cells = [];

  for (let j = 0; j < rows; j += 1) {
    const latestRow = [];
    for (let i = 0; i < cols; i += 1) {
      latestRow.push(null);
    }
    cells.push(latestRow);
  }

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
            />
          )
        })
      })}
    </svg>
  );
};
