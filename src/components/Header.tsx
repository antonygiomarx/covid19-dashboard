import { useRef, useState } from 'react';
import DarkModeToggle from './Toggle';
const Header = ({ cases }: { cases: string }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const handleToggle = (e: Event) => {
    console.log('works');

    // const checkbox = document.getElementById('checkbox');
    // refToggle.current.setAttribute('checked', true);

    // checkbox.getAttribute('checked')
    //   ? document.body.classList.remove('is-light-mode')
    //   : document.body.classList.add('is-dark-mode');
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Covid-19 Dashboard</h1>
            <p className="header-total">Total de casos: {cases ? cases : 0} </p>
          </div>
          <div className="dark-mode">
            <p className="dark-mode-title"></p>
            <DarkModeToggle
              onChange={() => console.log('toggle works')}
              DarkMode={true}
            />
            {/* <input type="checkbox" className="checkbox" id="checkbox" />
            <label
              className="switch"
              htmlFor="checkbox"
              ref={refToggle}
              onClick={handleToogle}
            ></label> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
