import React from 'react';
import { CellProps } from '../types';
import classes from './Cell.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { playerSelector, moveCounterSelector, isWinnerSelector } from '../store/selectors';
import { setCell } from '../store/boardSlice';
import { changePlayer, incrementMoveCount, setFirstMoveDone } from '../store/playerSlice';

const Cell: React.FC<CellProps> = props => {
  const { value, coordinate } = props;
  const { rowNumber, colNumber } = coordinate;
  const dispatch = useDispatch();
  const player = useSelector(playerSelector);
  const firstMove = useSelector(moveCounterSelector);
  const isWinner = useSelector(isWinnerSelector);

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
