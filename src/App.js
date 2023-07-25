import React, { useState } from 'react';
import useConfetti from './Hooks/useConfetti';
import './App.css'

function App() {
  const [bestTime, setBestTime] = useState(false);
  const [bestDiceRoll, setBestDiceRoll] = useState(false);
  const { confetti, newBestTime, newBestDiceRoll, newBestGame } = useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll });

  return (
    <section className="confetti">
    {!bestTime && !bestDiceRoll && <h1>Choose a React state, and click celebrate!</h1>} 

    {bestTime && bestDiceRoll ? (
    <h1>🏆New Best Game!🏆</h1>
    ) : bestDiceRoll ? (
    <h1>🎲New Best Dice Roll!🎲</h1>
    ) : bestTime ? (
    <h1>⏱New Best Time!⏱</h1>
) : null}

      <div>
        <button onClick={newBestTime}>newBestTime</button>
        <button onClick={newBestDiceRoll}>newBestDiceRoll</button>
        <button onClick={newBestGame}>newBestGame</button>
      </div>
        <button onClick={confetti}>Celebrate!</button>
    </section>
  );
};

export default App;