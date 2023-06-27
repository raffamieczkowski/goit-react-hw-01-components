import React from 'react';
import './Statistics.css';
import statsData from './data.json';

const Statistics = ({ title }) => {
  return (
    <div className="statistics-box">
      <div className="stat-title">
      {title && <h2 className="stat-title">{title}</h2>}
      </div>
      <ul className="stat-list">
        {statsData.map(({ id, label, percentage }) => (
          <li className="stat-item" key={id}>
            <span className="stat-label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
