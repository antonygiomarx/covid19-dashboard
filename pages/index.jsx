import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import App from '../components/App';

export default function Index({ cases }) {
  return (
    <div>
      <Head>
        <title>Covid-19 Dashboard</title>
      </Head>
      <App data={cases} />
    </div>
  );
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.covid19api.com/summary');
  const data = await res.json();
  return {
    cases: data
  };
};
