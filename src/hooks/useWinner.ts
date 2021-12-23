import { isGameStarted, cellSelector, matrixSelector } from '../store/selectors';
import { useSelector } from 'react-redux';
import { CellType, CellProps } from '../types';

// custom hook to calculate the winner of the game
export const useWinner = () => {
  const matrix = useSelector(matrixSelector);
  const isFirstMoveDone = useSelector(isGameStarted);
  const currentCell = useSelector(cellSelector);
  let winner = null;

  // check row win combination
  const checkRowWin = (board: CellType[][], cell: CellProps) => {
    const { coordinate, value } = cell;
    const { rowNumber } = coordinate;
    let row = board[rowNumber];
    if (row.every(cell => cell === value)) {
      return true;
    }
    return false;
  };

  // check column win combination
  const checkColumnWin = (board: CellType[][], cell: CellProps) => {
    const { coordinate, value } = cell;
    const { colNumber } = coordinate;

    for (let i = 0; i < board.length; i++) {
      if (board[i][colNumber] !== value) {
        return false;
      }
    }
    return true;
  };

  // check diagonal win combination
  const checkDiagonalWin = (board: CellType[][], cell: CellProps) => {
    const { value } = cell;
    let diag = [];
    let oppDiag = [];
    for (let i = 0; i < board.length; i++) {
      diag.push(board[i][i]);
      oppDiag.push(board[i][board.length - 1 - i]);
    }
    if (diag.every(cell => cell === value) || oppDiag.every(cell => cell === value)) {
      return true;
    }
    return false;
  };

  // check all win combinations for winner
  if (isFirstMoveDone) {
    if (currentCell) {
      if (
        checkRowWin(matrix, currentCell) ||
        checkColumnWin(matrix, currentCell) ||
        checkDiagonalWin(matrix, currentCell)
      ) {
        winner = currentCell.value;
      }
    }
  }
  if (!winner) {
    // stop the game if there is a winner
    return null;
  }
  return winner;
};
