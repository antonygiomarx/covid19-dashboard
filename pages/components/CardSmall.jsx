const CardSmall = ({ country, cases }) => {
  return (
    <div className="card-small">
      <p className="card-small-views">{country}</p>
      <p className="card-small-icon">
        <img src="images/icon-facebook.svg" alt="" />
      </p>
      <p className="card-small-number">{cases}</p>
    </div>
  );
};
export default CardSmall;
