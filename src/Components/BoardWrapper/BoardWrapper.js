import { useCallback, useMemo, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


// The default state of the board is set in a constant...
const DEFAULT_BOARD = [...Array(9)];

/** @param {Squares} squares */
const getWinner = squares =>
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
        // We map every index to the current value in `squares`...
        .map(line => line.map(number => squares[number]))
        // We find the winner line or return `undefined`...
        .find(([a, b, c]) => a === b && a === c)?.[0];

const getNext = squares => squares.filter(Boolean).length % 2 === 0 ? "X" : "O";

const Board = ({
    next,
    onRestartClick,
    onSquareClick,
    squares,
    winner,
    ...props
}) => (
    <div {...props}>
        <div className="Status">
            {winner
                ? `Winner: ${winner}`
                : squares.every(Boolean)
                    ? "Draw"
                    : `Next player: ${next}`}
        </div>
        <div className="Squares">
            {squares.map((square, index) => (
                <button
                    className="Square"
                    key={index}
                    onClick={() => onSquareClick(index)}
                >
                    {square}
                </button>
            ))}
        </div>
        <OverlayTrigger overlay={<Tooltip placement="bottom">Restart the Game!</Tooltip>}>
            <button className="Restart" onClick={onRestartClick}>
                <i class="bi bi-arrow-counterclockwise"></i>
            </button>
        </OverlayTrigger>
    </div >
);

const BoardWrapper = props => {
    const [squares, setSquares] = useState(DEFAULT_BOARD);

    // From here we use `useMemo` and `useCallback` to avoid re-renders...
    const next = useMemo(() => getNext(squares), [squares]);
    const winner = useMemo(() => getWinner(squares), [squares]);
    const onRestartClick = useCallback(() => setSquares(DEFAULT_BOARD), [setSquares]);
    const onSquareClick = useCallback(
        index =>
            winner === undefined && squares[index] === undefined
                ? setSquares([
                    ...squares.slice(0, index),
                    next,
                    ...squares.slice(index + 1)
                ])
                : undefined,
        [next, setSquares, squares, winner]
    );

    return (
        <div className="Game" {...props}>
            <div className="GameBoard">
                <Board
                    {...{
                        onRestartClick,
                        onSquareClick,
                        next,
                        squares,
                        winner
                    }}
                />
            </div>
        </div>
    );
};

export default BoardWrapper;