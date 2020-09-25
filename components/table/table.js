import { useContext } from 'react';
import { WordSearchContext } from '@components/wrapper/wrapper';
import Letter from '@components/letter/letter';
import styles from './table.module.css';

const Table = () => {
  const { puzzle, selectedLetters, setSelectedLetters } = useContext(WordSearchContext);

  const toggleLetter = (letter, x, y) => {
    if (letter === '-') return;
    const key = `${x},${y}`;
    setSelectedLetters({
      type: (selectedLetters || []).includes(key) ? 'remove' : 'add',
      payload: key,
    });
  };

  return (<table className={styles.ws}>
    <tbody>
      {(puzzle || []).map((row, i) => {
        return (
          <tr key={i}>
            {(row || []).map((it, j) => {
              return (
                <Letter
                  x={j} y={i}
                  key={j} letter={it}
                  onClick={() => { toggleLetter(it, j, i); }}/>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>);
};

export default Table;
