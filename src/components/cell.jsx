import React from 'react';

export const Cell = ({ i, j }) => {
  return (
    <rect
      x={i * 100} y={j * 100}
      width="100" height="100" />
  );
};
