import React from 'react';

import './Header.scss';



const Header = ({toggleDarkMode}) => (
    <div>
        <header className="header">
            <h1>Where in the World?</h1>
            <button className="header__btn" onClick={toggleDarkMode}>Dark Mode</button>
        </header>
    </div>
);

export default Header;
