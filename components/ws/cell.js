import { useContext } from 'react';
import { WordSearchContext } from '@components/ws/ws-wrapper';

const Cell = ({ letter, activeClassName, blockClassName, x, y, onClick }) => {
  const { selectedLetters } = useContext(WordSearchContext);

  const active = (selectedLetters || []).includes(`${x},${y}`);

  return (<td
    className={`${active ? activeClassName : ''} ${letter === '-' ? blockClassName : ''}`}
    onClick={onClick}>
    {letter}
  </td>);
};

export default Cell;
