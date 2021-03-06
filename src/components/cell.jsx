export const Cell = ({ i, j, value, cellSize, clickHandler, isClickable }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (!value) { clickHandler(i, j); }
  }

  const style = () => {
    if (isClickable) { return { cursor: 'pointer' } }
    return {};
  }

  return (
    <g>
      { value &&
        <circle
          cx={(i + 0.5) * cellSize}
          cy={(j + 0.5) * cellSize}
          r={cellSize * 0.4}
          fill={value} /> }
      <rect
        x={i * cellSize} y={j * cellSize}
        width={cellSize} height={cellSize}
        onClick={handleClick}
        style={style()} />
      }
    </g>
  );
};
