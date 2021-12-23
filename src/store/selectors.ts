import { RootState } from './index';
import { createSelector } from 'reselect';
import { Matrix, PlayerState, BoardState } from '../types';

const selectPlayer = (state: RootState) => state.player;
const selectPlayerCounter = (state: RootState) => state.player.counter;
const selectPlayerTotalMaxMoves = (state: RootState) => state.player.totalMaxMoves;
const selectBoard = (state: RootState) => state.board;
const selectMatrix = (state: RootState) => state.board.matrix;

export const matrixSelector = createSelector(selectMatrix, (matrix: Matrix) => matrix);

export const playerSelector = createSelector(selectPlayer, (player: PlayerState) => player.player);

export const moveCounterSelector = createSelector(
  selectPlayer,
  (player: PlayerState) => player.counter
);

export const isWinnerSelector = createSelector(
  selectPlayer,
  (player: PlayerState) => player.winner
);

export const isGameStarted = createSelector(
  selectPlayer,
  (player: PlayerState) => player.isFirstMoveDone
);

export const cellSelector = createSelector(selectBoard, (board: BoardState) => board.currentCell);

export const endGameSelector = createSelector(
  [selectPlayerTotalMaxMoves, selectPlayerCounter],
  (totalMaxMoves: number | null, counter: number) => {
    if (totalMaxMoves === counter) {
      return true;
    }
    return false;
  }
);
