import React from 'react';
import './Statistics.css';
import statsData from './data.json';

const Statistics = ({ title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      
      <ul className="stat-list">
        {statsData.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
