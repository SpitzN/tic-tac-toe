import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellType, PlayerState } from '../types';

const initialState: PlayerState = {
  player: 'X',
  counter: 0,
  isFirstMoveDone: false,
  winner: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changePlayer: (state, action: PayloadAction<CellType>) => {
      return {
        ...state,
        player: action.payload,
      };
    },
    incrementMoveCount: state => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    },
    setFirstMoveDone: state => {
      return {
        ...state,
        isFirstMoveDone: true,
      };
    },
    declareWinner: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        winner: action.payload,
      };
    },
  },
});

export const { changePlayer, incrementMoveCount, setFirstMoveDone, declareWinner } =
  playerSlice.actions;
export default playerSlice.reducer;
