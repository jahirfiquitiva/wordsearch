import { useContext } from 'react';
import { WordSearchContext } from '@components/ws/ws-wrapper';
import styles from './ws.module.css';
import Cell from '@components/ws/cell';

const WordSearch = () => {
  const { puzzle, placed, solvedWords, selectedLetters, setSelectedLetters }
    = useContext(WordSearchContext);

  const toggleLetter = (letter, x, y) => {
    if (letter === '-') return;
    const key = `${x},${y}`;
    setSelectedLetters({
      type: (selectedLetters || []).includes(key) ? 'remove' : 'add',
      payload: key,
    });
  };

  return (<>
    <table className={styles.ws}>
      <tbody>
        {(puzzle || []).map((row, i) => {
          return (
            <tr key={i}>
              {(row || []).map((it, j) => {
                return (
                  <Cell
                    x={j} y={i}
                    key={j} letter={it}
                    activeClassName={styles.active} blockClassName={styles.cw}
                    onClick={() => { toggleLetter(it, j, i); }}/>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <ul className={styles.words}>
      {(Object.keys(placed) || []).map((it, i) => {
        return (<li key={i} className={solvedWords.includes(it) ? styles.solved : ''}>{it}</li>);
      })}
    </ul>
  </>);
};

export default WordSearch;
