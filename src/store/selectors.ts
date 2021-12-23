import { createSelector } from 'reselect';
import { CellType } from '../types';

export const matrixSelector = createSelector(
  (state: any) => state.board.matrix,
  (matrix: CellType[][]) => matrix
);

export const playerSelector = createSelector(
  (state: any) => state.player,
  (player: CellType) => player
);

export const moveCounterSelector = createSelector(
  (state: any) => state.moveCount.counter,
  (counter: number) => counter
);

export const isGameStarted = createSelector(
  (state: any) => state.moveCount.isFirstMoveDone,
  (isFirstMoveDone: boolean) => isFirstMoveDone
);

export const cellSelector = createSelector(
  (state: any) => state.board.currentCell,
  (currentCell: any) => currentCell
);
