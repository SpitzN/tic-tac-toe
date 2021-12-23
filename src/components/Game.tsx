import React, { useState, useRef } from 'react';
import Board from './Board';
import classes from './Game.module.css';
import styled from 'styled-components';
import { setBoard } from '../store/boardSlice';
import { useDispatch } from 'react-redux';
import { useWinner } from '../hooks/useWinnerHook';
import { declareWinner, setTotalMaxMoves, resetGame } from '../store/playerSlice';
import { usePlayerSelector, useEndGameSelector } from '../hooks/useSelectorsHook';

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
  const endGame = useEndGameSelector();
  const player = usePlayerSelector();

  setTimeout(() => {
    if (winner) {
      dispatch(declareWinner(true));
    }
  }, 0);

  const inputRef = useRef<HTMLInputElement>(null);

  const onInputClick = () => {
    if (inputRef.current === null) {
      return;
    }
    const inputValue = Number(inputRef.current.value);
    if (inputValue < 3) {
      alert('Please enter a number greater than 3');
      return;
    }

    const { value } = inputRef.current!;
    const rows = Number(value);
    setRows(rows);
    dispatch(setBoard(rows));
    dispatch(setTotalMaxMoves(rows * rows));
    setIsBoardReady(true);
  };

  const handleRestartGame = () => {
    setIsBoardReady(false);
    setRows(0);
    dispatch(resetGame());
  };

  const renderEndGameNoWinner = () => {
    if (endGame && !winner) {
      return (
        <>
          <div className={classes['end-game']}>
            <p>The Game Has Ended With A Draw, You Can Hit Restart To Start A New Game</p>
          </div>
        </>
      );
    }
  };

  return (
    <div className={classes.game}>
      <h1>Tic Tac Toe</h1>
      {!isBoardReady && (
        <div className={classes.settings}>
          <label htmlFor='board-size'>Choose Number of Rows</label>
          <input name='board-size' ref={inputRef}></input>
          <button onClick={onInputClick}>Start</button>
        </div>
      )}
      {isBoardReady && (
        <div className={classes['game-board']}>
          <Board rows={rows} columns={rows} />
        </div>
      )}
      <PlayerIfno>
        {isBoardReady && (
          <>
            <div className={classes.players}>
              {!!winner ? `Winner is ${winner}` : `Next Player ${player}`}
            </div>
            <div className={classes.restart}>
              <button onClick={handleRestartGame}>Restart</button>
            </div>
          </>
        )}
        {renderEndGameNoWinner()}
      </PlayerIfno>
    </div>
  );
};
export default Game;
