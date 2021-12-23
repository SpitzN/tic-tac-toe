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

export type Matrix = CellType[][];

export interface BoardState {
  matrix: Matrix;
  currentCell: CellProps | null;
}

export interface PlayerState {
  player: CellType;
  counter: number;
  isFirstMoveDone: boolean;
}
