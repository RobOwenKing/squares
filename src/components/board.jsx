import React from 'react';

import { Cell } from './cell.jsx';

export const Board = ({ rows, cols }) => {
  const cells = [];

  for (let j = 0; j < rows; j += 1) {
    for (let i = 0; i < cols; i += 1) {
      cells.push([i, j]);
    }
  }

  return (
    <svg
      version="1.1" xmlns="http://www.w3.org/2000/svg"
      viewBox={`-16 -16 ${(rows * 100) + 16} ${(cols * 100) + 16}`}
    >
      {cells.map(([i, j], index) => {
        return <Cell key={index} i={i} j={j} />
      })}
    </svg>
  );
};
