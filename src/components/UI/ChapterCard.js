import React from 'react';

const ChapterCard = () => (
  <div className="chapter-card">
    <h3 className="chapter-card-title">Current chapter</h3>
    <p className="chapter-card-input">Chapter 12</p>

    <button className="chapter-card-btn" type="button">
      update progress
    </button>
  </div>
);

export default ChapterCard;
