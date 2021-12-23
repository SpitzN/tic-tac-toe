import { RootState } from './index';
import { createSelector } from 'reselect';
import { CellType } from '../types';

export const matrixSelector = createSelector(
  (state: RootState) => state.board.matrix,
  (matrix: CellType[][]) => matrix
);

export const playerSelector = createSelector(
  (state: RootState) => state.player.player,
  (player: CellType) => player
);

export const moveCounterSelector = createSelector(
  (state: RootState) => state.player.counter,
  (counter: number) => counter
);

export const isWinnerSelector = createSelector(
  (state: RootState) => state.player.winner,
  (winner: boolean) => winner
);

export const isGameStarted = createSelector(
  (state: RootState) => state.player.isFirstMoveDone,
  (isFirstMoveDone: boolean) => isFirstMoveDone
);

export const cellSelector = createSelector(
  (state: RootState) => state.board.currentCell,
  currentCell => currentCell
);
