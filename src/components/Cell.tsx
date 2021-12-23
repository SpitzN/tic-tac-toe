import React, { useRef } from 'react';
import { CellProps } from '../types';
import classes from './Cell.module.css';
import { useDispatch } from 'react-redux';
import { setCell } from '../store/boardSlice';
import { changePlayer, incrementMoveCount, setFirstMoveDone } from '../store/playerSlice';
import {
  usePlayerSelector,
  useMoveCounterSelector,
  useWinnerSelector,
} from '../hooks/useSelectorsHook';

const Cell: React.FC<CellProps> = props => {
  const { value, coordinate } = props;
  const { rowNumber, colNumber } = coordinate;
  const dispatch = useDispatch();
  const player = usePlayerSelector();
  const firstMove = useMoveCounterSelector();
  const isWinner = useWinnerSelector();
  const render = useRef(0);

  // const [isPlayerX, setIsPlayerX] = React.useState(true);

  console.log(`cell render at index ${rowNumber},${colNumber} ${++render.current}`);

  const onCellClickHandler = () => {
    if (value !== null || isWinner) return;

    if (firstMove === 0) {
      dispatch(setFirstMoveDone());
    }
    dispatch(setCell({ rowNumber, colNumber, newValue: player }));
    dispatch(incrementMoveCount());
    if (player === 'X') {
      dispatch(changePlayer('O'));
    } else {
      dispatch(changePlayer('X'));
    }
  };

  return (
    <div className={classes.cell} onClick={onCellClickHandler}>
      <div className='cell-inner'>{value}</div>
    </div>
  );
};

export default Cell;
