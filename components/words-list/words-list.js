import { useContext } from 'react';
import { WordSearchContext } from '@components/wrapper/wrapper';
import styles from './words-list.module.css';

const WordsList = () => {
  const { placed, solvedWords } = useContext(WordSearchContext);

  return (<ul className={styles.words}>
    {(Object.keys(placed) || []).map((it, i) => {
      return (<li key={i} className={solvedWords.includes(it) ? styles.solved : ''}>{it}</li>);
    })}
  </ul>);
};

export default WordsList;
