import { CellProps, Matrix } from '../types';
import { useMatrixSelector, useCellSelector, useIsGameStartedSelector } from './useSelectorsHook';

// custom hook to calculate the winner of the game
export const useWinner = () => {
  const matrix = useMatrixSelector();
  const isFirstMoveDone = useIsGameStartedSelector();
  const currentCell = useCellSelector();

  let winner = null;

  // check row winning combination
  const checkRowWin = (board: Matrix, cell: CellProps) => {
    const { coordinate, value } = cell;
    const { rowNumber } = coordinate;
    let row = board[rowNumber];
    if (row.every(cell => cell === value)) {
      return true;
    }
    return false;
  };

  // check column winning combination
  const checkColumnWin = (board: Matrix, cell: CellProps) => {
    const { coordinate, value } = cell;
    const { colNumber } = coordinate;

    for (let i = 0; i < board.length; i++) {
      if (board[i][colNumber] !== value) {
        return false;
      }
    }
    return true;
  };

  // check diagonal winning combination
  const checkDiagonalWin = (board: Matrix, cell: CellProps) => {
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

  // check all win combinations for winner and return the winner CellType
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
    return null;
  }

  return winner;
};
