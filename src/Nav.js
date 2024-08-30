import React from 'react';


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/about">ABOUT</a>
                </li>
                <li>
                    <a href="/menu">MENU</a>
                </li>
                <li>
                    <a href="/reservations">RESERVATIONS</a>
                </li>
                <li>
                    <a href="/contact">ORDER ONLINE</a>
                </li>
                <li>
                    <a href="/contact">LOGIN</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;