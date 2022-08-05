import { useState } from 'react';

import Statistics from './components/Statistics';
import Button from './components/Button';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 1, 1: 3, 2: 4, 3: 2 });
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteAnecdote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);

    for (const [key] of Object.entries(copy)) {
      if (copy[key] > copy[mostVotedAnecdote]) {
        setMostVotedAnecdote(key);
      }
    }
  };

  return (
    <>
      <h2>Give feedback</h2>
      <div>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />

      <hr />

      <div>
        {anecdotes[selected]} has {points[selected]} votes
        <button onClick={voteAnecdote}>Vote</button>
        <button onClick={nextAnecdote}>Next anecdote</button>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[mostVotedAnecdote]}</div>
        <div>has {points[mostVotedAnecdote]} votes</div>
      </div>
    </>
  );
}

export default App;
