import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

const CircularProgressBar = ({ id, progress }) => {
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    setLocalProgress(progress);
  }, [progress]);

  useEffect(() => {
    const localStore = JSON.parse(localStorage.getItem('local_progress')) || [];
    setLocalProgress(
      localStore.find((item) => item.local_id === id)?.progress || 0,
    );
  }, []);

  const roundedProgress = Math.round(localProgress);
  const progressStyle = {
    strokeDasharray: '186px',
    strokeDashoffset: `calc(186px - (186px * ${localProgress}) / 100)`,
    stroke: '#0290ff',
    transition: 'stroke-dashoffset 0.5s ease 0s, stroke 0.5s ease',
  };
  return (
    <div className="progress-container">
      <svg>
        <circle cx="35" cy="35" r="30" />
        <circle cx="35" cy="35" r="30" style={progressStyle} />
      </svg>

      <div className="text">
        <span className="text-percentage">{`${roundedProgress}%`}</span>
        <span className="text-completed">completed</span>
      </div>
    </div>
  );
};

CircularProgressBar.propTypes = {
  id: propTypes.string.isRequired,
  progress: propTypes.number.isRequired,
};

export default CircularProgressBar;
