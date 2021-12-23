import React, { useState, useRef } from 'react';
import Board from './Board';
import classes from './Game.module.css';
import styled from 'styled-components';
import { setBoard } from '../store/boardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useWinner } from '../hooks/useWinner';
import { playerSelector } from '../store/selectors';

const PlayerIfno = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
`;

const Game: React.FC = () => {
  const [rows, setRows] = useState(0);
  const [isBoardReady, setIsBoardReady] = useState(false);
  const dispatch = useDispatch();
  const winner = useWinner();
  const player = useSelector(playerSelector);
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputClick = () => {
    const { value } = inputRef.current!;
    const rows = Number(value);
    setRows(rows);
    dispatch(setBoard(rows));
    setIsBoardReady(true);
  };

  return (
    <div className={classes.game}>
      <h1>Tic Tac Toe</h1>
      {!isBoardReady && (
        <div className='settings'>
          <label htmlFor='board-size'>Choose Number of Rows</label>
          <input name='board-size' ref={inputRef}></input>
          <button onClick={onInputClick}>Submit</button>
        </div>
      )}
      {isBoardReady && (
        <div className={classes['game-board']}>
          <Board rows={rows} columns={rows} />
        </div>
      )}
      <PlayerIfno>
        {isBoardReady && (
          <div className={classes.players}>
            {!!winner ? `Winner is ${winner}` : `Next Player ${player}`}
          </div>
        )}
      </PlayerIfno>
    </div>
  );
};
export default Game;
