import React from 'react';

import './Header.scss';

const toggleDarkMode = () =>{
   document.body.classList.toggle("light-mode");
   document.querySelector('.card').classList.toggle("light-mode-card");
}

const Header = () => (
    <div>
        <header className="header">
            <h1>Where in the World</h1>
            <button onClick={toggleDarkMode}>Dark Mode</button>
        </header>
    </div>
);

export default Header;
