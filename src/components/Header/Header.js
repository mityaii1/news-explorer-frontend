import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    const { pathname } = useLocation();


    return (
        <header className={`header ${pathname === '/saved-news' && 'header_dark'}`}>
            <Link className={`header__logo ${pathname === '/saved-news' && 'header__logo_dark'}`} to="/">NewsExplorer</Link>
            <Navigation onLogin={props.onLogin} onMobileMenu={props.onMobileMenu} />

            <button className={`${pathname === '/' && 'header__mobile-menu header__mobile-menu_white'} ${pathname === '/saved-news' && 'header__mobile-menu header__mobile-menu_dark'} ${props.isPopupOpen && 'header__mobile-menu_hidden'} `} onClick={props.onMobileMenu}
            />


        </header>
    )
}

export default Header;