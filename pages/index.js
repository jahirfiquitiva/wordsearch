import { useState } from 'react';
import Head from 'next/head';
import SopaLetras from '../components/sopa/sopa-letras';

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <p>Contador {counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <br/><br/><br/>
      <SopaLetras/>
    </div>
  );
};

export default Home;
