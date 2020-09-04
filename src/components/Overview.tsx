import CardSmall from './CardSmall';
const Overview = ({ data }: { data: any }) => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Países</h2>
        <div className="grid">
          {data.Countries.map((el: any, i: any) => (
            <div key={i.toString()}>
              <CardSmall country={el.Country} cases={el.TotalConfirmed} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
