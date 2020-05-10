import Card from './Card';
import fetch from 'isomorphic-unfetch';

const TopCard = ({ data }) => {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          <Card
            title="Nuevos Confirmados"
            data={data ? data.NewConfirmed : 0}
          />
          <Card
            title="Total Confirmados"
            data={data ? data.TotalConfirmed : 0}
          />
          <Card title="Nuevas Muertes" data={data ? data.NewDeaths : 0} />
          <Card title="Total de Muertes" data={data ? data.TotalDeaths : 0} />
        </div>
      </div>
    </section>
  );
};

export default TopCard;
