import { createContext, useReducer } from 'react';
import styles from './wrapper.module.css';

export const WordSearchContext = createContext('ws');

const lettersReducer = (data, action) => {
  switch (action.type) {
    case 'add':
      return [...data, action.payload];
    case 'remove':
      const newData = (data || []).filter((it) => it !== action.payload);
      return [...newData];
    default:
      return [...data];
  }
};

const WordSearchWrapper = ({ puzzle, solved, placed, children }) => {
  const [selectedLetters, setSelectedLetters] = useReducer(lettersReducer, []);

  const getSolvedWords = () => {
    const solvedWords = [];
    (Object.keys(placed) || []).forEach((key) => {
      let score = 0;
      (placed[key] || []).forEach((position) => {
        if (selectedLetters.includes(position.join(','))) score += 1;
      });
      if (score >= key.length) solvedWords.push(key);
    });
    return solvedWords;
  };

  return (
    <WordSearchContext.Provider
      value={{
        puzzle, solved, placed,
        selectedLetters, setSelectedLetters,
        solvedWords: getSolvedWords()
      }}>
      <div className={styles.site}>
        <h1 className={styles.siteTitle}>Word Search Game</h1>
        {children}
      </div>
    </WordSearchContext.Provider>
  );
};

export default WordSearchWrapper;
