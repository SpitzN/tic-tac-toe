import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { CellType, BoardState } from '../types';

const resetGame = createAction('resetGame');
const initialState: BoardState = {
  matrix: [],
  currentCell: null,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<number>) => {
      let matrix: any[][] = [];

      for (let r = 0; r < action.payload; r++) {
        matrix.push([]);
        for (let c = 0; c < action.payload; c++) {
          matrix[r].push(null);
        }
      }
      return {
        ...state,
        matrix,
      };
    },

    setCell: (
      state,
      action: PayloadAction<{ rowNumber: number; colNumber: number; newValue: CellType }>
    ) => {
      const { rowNumber, colNumber, newValue } = action.payload;
      const newMatrix = JSON.parse(JSON.stringify(state.matrix));
      newMatrix[rowNumber][colNumber] = newValue;
      return {
        ...state,
        matrix: newMatrix,
        currentCell: {
          value: newValue,
          coordinate: {
            rowNumber,
            colNumber,
          },
        },
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(resetGame, (state, action) => {
      return {
        ...state,
        ...initialState,
      };
    });
  },
});

export const { setBoard, setCell } = boardSlice.actions;
export default boardSlice.reducer;
