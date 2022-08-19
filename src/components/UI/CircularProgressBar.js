import React from 'react';
// import { motion } from 'framer-motion';

const CircularProgressBar = () => {
  const progressStyle = {
    strokeDasharray: '186px',
    strokeDashoffset: `calc(186px - (186px * ${0}) / 100)`,
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
        <span className="text-percentage">64%</span>
        <span className="text-completed">completed</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
