import React from 'react';

export const Cell = ({ i, j, value, cellSize, clickHandler }) => {
  const handleClick = (event) => {
    event.preventDefault();
    clickHandler(i, j);
  }

  return (
    <rect
      x={i * cellSize} y={j * cellSize}
      width={cellSize} height={cellSize}
      onClick={handleClick} />
  );
};
