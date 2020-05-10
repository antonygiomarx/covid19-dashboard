import App from './components/App';

export default function Index({ cases }) {
  return <App data={cases} />;
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.covid19api.com/summary');
  const data = await res.json();
  return {
    cases: data
  };
};
