import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellType, PlayerState } from '../types';


const initialState: PlayerState = {
  player: 'X',
  counter: 0,
  isFirstMoveDone: false,
  winner: false,
  totalMaxMoves: null,
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
    setTotalMaxMoves: (state, action: PayloadAction<number | null>) => {
      if (action.payload === null) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        totalMaxMoves: action.payload,
      };
    },
    resetGame: state => {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const {
  changePlayer,
  incrementMoveCount,
  setFirstMoveDone,
  declareWinner,
  setTotalMaxMoves,
  resetGame,
} = playerSlice.actions;
export default playerSlice.reducer;
