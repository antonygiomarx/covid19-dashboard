const Card = ({ title, data }) => {
  return (
    <article className="card youtube">
      <p className="card-title">
        <img src="images/icon-facebook.svg" alt="" />
        {title}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{data}</span>
        <span className="card-followers-title">Casos</span>
      </p>
    </article>
  );
};
export default Card;
