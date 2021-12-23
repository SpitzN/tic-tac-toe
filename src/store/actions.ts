import { createAction } from '@reduxjs/toolkit';
import { CellType } from '../types';

export const setBoard = createAction<number>('SET_BOARD');
export const setCell =
  createAction<{ rowNumber: number; colNumber: number; newValue: CellType }>('SET_CELL');

export const setPlayer = createAction<CellType>('SET_PLAYER');

export const incrementMoveCount = createAction('INCREMENT_MOVE_COUNT');
