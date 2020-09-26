import { useContext } from 'react';
import { WordSearchContext } from '@components/wrapper/wrapper';
import styles from './words-list.module.css';

const WordsList = () => {
  const { placed, solvedWords } = useContext(WordSearchContext);

  return (<div>
    <p><b>Try to find the following words:</b></p>
    <ul className={styles.words}>
      {(Object.keys(placed) || []).map((it, i) => {
        return (<li key={i} className={solvedWords.includes(it) ? styles.solved : ''}>{it}</li>);
      })}
    </ul>
  </div>);
};

export default WordsList;
