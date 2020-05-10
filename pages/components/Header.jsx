const Header = ({ cases }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Covid-19 Dashboard</h1>
            <p className="header-total">Total de casos: {cases ? cases : 0} </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
