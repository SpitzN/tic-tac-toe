import React from 'react';
import { CellProps } from '../types';
import classes from './Cell.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { playerSelector } from '../store/selectors';
import { setCell, incrementMoveCount, setPlayer } from '../store/actions';

const Cell: React.FC<CellProps> = props => {
  const { value, coordinate } = props;
  const { rowNumber, colNumber } = coordinate;
  const dispatch = useDispatch();
  const player = useSelector(playerSelector);
  const onCellClickHandler = () => {
    if (value !== null) {
      return;
    }
    dispatch(setCell({ rowNumber, colNumber, newValue: player }));
    dispatch(incrementMoveCount());
    if (player === 'X') {
      dispatch(setPlayer('O'));
    } else {
      dispatch(setPlayer('X'));
    }
  };

  return (
    <div className={classes.cell} onClick={onCellClickHandler}>
      <div className='cell-inner'>{value}</div>
    </div>
  );
};

export default Cell;
