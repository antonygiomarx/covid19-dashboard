import Card from './Card';

const TopCard = ({ data }: any) => {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          <Card
            title="Nuevos Confirmados"
            data={data ? data.NewConfirmed : 0}
          />
          <Card
            title="Total Recuperados"
            data={data ? data.TotalRecovered : 0}
          />
          <Card title="Nuevas Muertes" data={data ? data.NewDeaths : 0} />
          <Card title="Total de Muertes" data={data ? data.TotalDeaths : 0} />
        </div>
      </div>
    </section>
  );
};

export default TopCard;
