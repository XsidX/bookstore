import React, { useReducer, useEffect } from 'react';
import propTypes from 'prop-types';

const progressReducer = (state, action) => {
  switch (action.type) {
    case 'CHAPTER_CHANGE':
      return { chapter: action.chapter, progress: (action.chapter / 24) * 100 };
    default:
      return state;
  }
};

const ChapterCard = ({ id, progressHandler }) => {
  const [progressState, dispatch] = useReducer(progressReducer, {
    chapter: 1,
    progress: 0,
  });

  const { chapter, progress } = progressState;

  const chapterChangeHandler = () => {
    const randomisedChapter = Math.floor(Math.random() * 24) + 1;
    dispatch({ type: 'CHAPTER_CHANGE', chapter: randomisedChapter });
  };

  useEffect(() => {
    let booksStored = JSON.parse(localStorage.getItem('local_progress')) || [];
    const bookStored = booksStored.find((item) => item.local_id === id);
    if (bookStored) {
      if (progress) bookStored.progress = progress;
    } else {
      booksStored = [...booksStored, { local_id: id, progress }];
    }
    localStorage.setItem('local_progress', JSON.stringify(booksStored));
    progressHandler(progress);
  }, [progress]);

  return (
    <div className="chapter-card">
      <h3 className="chapter-card-title">Current chapter</h3>
      <p className="chapter-card-input">{`Chapter ${chapter}`}</p>

      <button
        className="chapter-card-btn"
        type="button"
        onClick={chapterChangeHandler}
      >
        update progress
      </button>
    </div>
  );
};

ChapterCard.propTypes = {
  id: propTypes.string.isRequired,
  progressHandler: propTypes.func.isRequired,
};

export default ChapterCard;
