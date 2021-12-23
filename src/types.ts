export type CellType = 'X' | 'O' | null;

export interface CellProps {
  value: CellType;
  coordinate: {
    rowNumber: number;
    colNumber: number;
  };
}

export interface BoardProps {
  rows: number;
  columns: number;
}

export interface BoardState {
  matrix: CellType[][];
  currentCell: CellProps | null;
}

export interface SetBoardAction {
  type: 'SET_BOARD';
  payload: number;
}

export interface SetCellAction {
  type: 'SET_CELL';
  payload: {
    rowNumber: number;
    colNumber: number;
    newValue: CellType;
  };
}

export type BoardAction = SetBoardAction | SetCellAction;
