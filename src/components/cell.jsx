import React from 'react';

export const Cell = ({ i, j, value, cellSize, clickHandler }) => {
  const handleClick = (event) => {
    event.preventDefault();
    clickHandler(i, j);
  }

  return (
    <g>
      { value &&
        <circle
          cx={(i + 0.5) * cellSize}
          cy={(j + 0.5) * cellSize}
          r={cellSize * 0.4} /> }
      <rect
        x={i * cellSize} y={j * cellSize}
        width={cellSize} height={cellSize}
        onClick={handleClick} />
      }
    </g>
  );
};
