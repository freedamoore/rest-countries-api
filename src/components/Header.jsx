import React from 'react';

import './Header.scss';



const Header = ({toggleDarkMode}) => {
    const changeDOM = () => {
        toggleDarkMode();
        document.body.classList.toggle("light-mode");
        document.querySelector('.header').classList.toggle("header__light");
    };

    return(
    <div>
        <header className="header">
            <h1 className="header__txt">Where in the World?</h1>
            <button className="header__btn" onClick={changeDOM}>Dark Mode</button>
        </header>
    </div>
)};

export default Header;
