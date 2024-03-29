import React from 'react';
import Cell from './Cell';
import { BoardProps } from '../types';
import styled from 'styled-components';
import { useMatrixSelector } from '../hooks/useSelectorsHook';

const BoardBase = styled.div<{ columns: number; rows: number }>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  grid-template-row: ${props => `repeat(${props.rows}, 1fr)`};
  grid-gap: 1px;
`;

const Board: React.FC<BoardProps> = props => {
  const { rows, columns } = props;
  const board = useMatrixSelector();

  return (
    <BoardBase rows={rows} columns={columns}>
      {board.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <Cell
            key={Math.random()}
            value={col}
            coordinate={{ rowNumber: rowIndex, colNumber: colIndex }}
          />
        ))
      )}
    </BoardBase>
  );
};

export default Board;
