import { useEffect } from 'react';
import { isGameStarted, cellSelector, matrixSelector, playerSelector } from '../store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setCell, setPlayer, incrementMoveCount } from '../store/actions';
import { CellType, CellProps } from '../types';

// custom hook to calculate the winner of the game
export const useWinner = () => {
  const matrix = useSelector(matrixSelector);
  const player = useSelector(playerSelector);
  const isFirstMoveDone = useSelector(isGameStarted);
  const currentCell = useSelector(cellSelector);
  let winner = null;

  const checkRowWin = (board: CellType[][], cell: CellProps, player: CellType) => {
    const { coordinate, value } = cell;
    const { rowNumber } = coordinate;
    let row = board[rowNumber];
    if (row.every(cell => cell === value)) {
      return true;
    }
    return false;
  };

  const checkColumnWin = (board: CellType[][], cell: CellProps, player: CellType) => {
    const { coordinate, value } = cell;
    const { colNumber } = coordinate;

    for (let i = 0; i < board.length; i++) {
      if (board[i][colNumber] !== value) {
        return false;
      }
    }
    return true;
  };

  // check diagonal win
  const checkDiagonalWin = (board: CellType[][], cell: CellProps, player: CellType) => {
    const { coordinate, value } = cell;
    const { rowNumber, colNumber } = coordinate;
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

  if (isFirstMoveDone) {
    if (
      checkRowWin(matrix, currentCell, player) ||
      checkColumnWin(matrix, currentCell, player) ||
      checkDiagonalWin(matrix, currentCell, player)
    ) {
      winner = currentCell.value;
    }
  }

  console.log('winner', winner);

  if (winner) {
    // stop the game if there is a winner
    // useEffect(() => {
    //     const dispatch = useDispatch();
    //     dispatch(setPlayer(null));
    // }, [winner]);
    // }

    return winner;
  }
  return null;
};
