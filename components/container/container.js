import Table from '@components/table/table';
import WordsList from '@components/words-list/words-list';
import styles from './container.module.css';

const Container = () => {
  return (<div className={styles.grid}>
    <Table/>
    <WordsList/>
  </div>);
};

export default Container;
