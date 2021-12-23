import { configureStore } from '@reduxjs/toolkit';
import { CellType, BoardState, BoardAction } from '../types';

const initialState: BoardState = {
  matrix: [],
  currentCell: null,
};

const boardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_BOARD':
      let matrix: CellType[][] = [];

      console.log(state);

      for (let r = 0; r < action.payload; r++) {
        matrix.push([]);
        for (let c = 0; c < action.payload; c++) {
          matrix[r].push(null);
        }
      }

      console.log({
        ...state,
        matrix,
      });

      return {
        ...state,
        matrix,
      };

    case 'SET_CELL':
      console.log(state);
      console.log(action);

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

    default:
      return state;
  }
};

const playerReducer = (state = 'X', action: any) => {
  switch (action.type) {
    case 'SET_PLAYER':
      console.log('payload', action.payload);
      return action.payload;
    default:
      return state;
  }
};

const moveCountInitialState = {
  counter: 0,
  isFirstMoveDone: false,
};

const moveCountReducer = (state = moveCountInitialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT_MOVE_COUNT':
      if (state.counter === 0) {
        return {
          ...state,
          counter: state.counter + 1,
          isFirstMoveDone: true,
        };
      }
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    board: boardReducer,
    player: playerReducer,
    moveCount: moveCountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
