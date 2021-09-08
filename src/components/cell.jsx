import React from 'react';

export const Cell = ({ i, j, value, cellSize }) => {
  return (
    <rect
      x={i * cellSize} y={j * cellSize}
      width={cellSize} height={cellSize} />
  );
};
