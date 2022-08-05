import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={(good + neutral + bad) / 3} />
      <Statistic text="positive" value={(good / (good + neutral + bad)) * 100} />
    </div>
  );
};

export default Statistics;
