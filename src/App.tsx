import React from 'react';
import classes from './App.module.css';
import Game from './components/Game';

function App() {

  return (
    <div className={classes.app}>
      <Game />
    </div>
  );
}

export default App;
