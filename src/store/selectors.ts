import { createSelector } from 'reselect';
import { CellType } from '../types';

export const matrixSelector = createSelector(
  (state: any) => state.board.matrix,
  (matrix: CellType[][]) => matrix
);

export const playerSelector = createSelector(
  (state: any) => state.player.player,
  (player: CellType) => player
);

export const moveCounterSelector = createSelector(
  (state: any) => state.player.counter,
  (counter: number) => counter
);

export const isWinnerSelector = createSelector(
  (state: any) => state.player.winner,
  (winner: boolean) => winner
);

export const isGameStarted = createSelector(
  (state: any) => state.player.isFirstMoveDone,
  (isFirstMoveDone: boolean) => isFirstMoveDone
);

export const cellSelector = createSelector(
  (state: any) => state.board.currentCell,
  (currentCell: any) => currentCell
);
