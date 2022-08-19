import React, { useReducer, useEffect } from 'react';
import propTypes from 'prop-types';

const progressReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PROGRESS':
      return { chapter: action.chapter, progress: action.progress };
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
    const localStore = JSON.parse(localStorage.getItem('local_progress')) || [];

    const localProgress = localStore.find((item) => item.local_id === id) || {};
    const localProgressChapter = localProgress.chapter || 1;
    const localProgressProgress = localProgress.progress || 0;
    dispatch({
      type: 'LOAD_PROGRESS',
      chapter: localProgressChapter,
      progress: localProgressProgress,
    });

    progressHandler(localProgressProgress);
  }, []);

  useEffect(() => {
    let booksStored = JSON.parse(localStorage.getItem('local_progress')) || [];
    const bookStored = booksStored.find((item) => item.local_id === id);
    if (bookStored) {
      if (chapter > 1) bookStored.chapter = chapter;
      if (progress > 0) bookStored.progress = progress;
    } else {
      booksStored = [...booksStored, { local_id: id, chapter, progress }];
    }

    localStorage.setItem('local_progress', JSON.stringify(booksStored));
    progressHandler(progress);
  }, [chapter, progress]);

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
