function Square({ value, onSquareClick }) {
  return (
    <button
      className={"square " + (value == "X" ? "blue" : "yellow")}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
