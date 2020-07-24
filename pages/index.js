import WordSearch from '@components/ws/ws';
import WordSearchWrapper from '@components/ws/ws-wrapper';
import wordsearch from '@utils/wordsearch';
import Head from 'next/head';

const WordSearchSite = (props) => {
  return (<WordSearchWrapper {...props}>
    <Head>
      <title>Word Search</title>
    </Head>
    <WordSearch/>
  </WordSearchWrapper>);
};

export default WordSearchSite;

export const getServerSideProps = async (context) => {
  const wordsJSON = await import('./../data/words.json');
  const words = wordsJSON.default || [];
  const wordsSortedByLength = words.sort((a, b) => {
    return a.length > b.length ? -1 : 1;
  });
  const size = Math.ceil(wordsSortedByLength[0].length * 1.25);
  const search = await wordsearch(words, size, size);
  if (!search) return { props: {} };
  return {
    props: {
      puzzle: search.grid,
      solved: search.solved,
      placed: search.placed,
    }
  };
};
