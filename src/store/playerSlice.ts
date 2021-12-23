import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellType, PlayerState } from '../types';

const initialState: PlayerState = {
  player: 'X',
  counter: 0,
  isFirstMoveDone: false,
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
  },
});

export const { changePlayer, incrementMoveCount, setFirstMoveDone } = playerSlice.actions;
export default playerSlice.reducer;
