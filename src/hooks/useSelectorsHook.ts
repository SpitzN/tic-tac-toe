import {
  matrixSelector,
  playerSelector,
  moveCounterSelector,
  isWinnerSelector,
  isGameStarted,
  cellSelector,
} from '../store/selectors';
import { useSelector } from 'react-redux';

export const useMatrixSelector = () => {
  const matrix = useSelector(matrixSelector);
  return matrix;
};

export const useCellSelector = () => {
  const currentCell = useSelector(cellSelector);
  return currentCell;
};

export const usePlayerSelector = () => {
  const player = useSelector(playerSelector);
  return player;
};

export const useMoveCounterSelector = () => {
  const counter = useSelector(moveCounterSelector);
  return counter;
};

export const useWinnerSelector = () => {
  const winner = useSelector(isWinnerSelector);
  return winner;
};

export const useIsGameStartedSelector = () => {
  const isFirstMoveDone = useSelector(isGameStarted);
  return isFirstMoveDone;
};
