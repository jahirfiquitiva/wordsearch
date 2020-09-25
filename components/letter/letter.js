import { useContext } from 'react';
import { WordSearchContext } from '@components/wrapper/wrapper';
import styles from './letter.module.css';

const Letter = ({ letter, x, y, onClick }) => {
  const { selectedLetters } = useContext(WordSearchContext);
  const active = (selectedLetters || []).includes(`${x},${y}`);

  return (<td
    className={`${styles.letter} ${active ? styles.active : ''} ${letter === '-' ? styles.cw : ''}`}
    onClick={onClick}>
    {letter}
  </td>);
};

export default Letter;
