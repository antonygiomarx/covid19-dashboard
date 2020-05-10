import CardSmall from './CardSmall';
const Overview = ({ data }) => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Países</h2>
        <div className="grid">
          {data.Countries.map((el) => (
            <div>
              <CardSmall country={el.Country} cases={el.TotalConfirmed} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
