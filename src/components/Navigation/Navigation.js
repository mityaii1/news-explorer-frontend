import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoutIcon from '../../images/logout-icon.svg'
import logoutIconDark from '../../images/logout-icon-dark.svg'

function Navigation(props) {
    const { pathname } = useLocation();
    
    return (
        <nav className={`navigation ${!props.onMobileMenu && 'navigation__mobile-menu'}`}>
            <Link
                className={`navigation__link ${pathname === '/' && 'navigation__link_active'} ${props.onMobileMenu && pathname === '/saved-news' && 'navigation__link_dark'}`}
                to="/"
                onClick={props.onClose} >
                Главная</Link>
            <Link
                className={`${props.loggedIn ? 'navigation__link' : 'navigation__block-hidden'} ${props.onMobileMenu && pathname === '/saved-news' && 'navigation__link_dark navigation__link_active_dark'}`}
                to="/saved-news"
                onClick={props.onClose}>
                Сохранённые статьи</Link>
            <button
                className={`navigation__button-auth ${props.onMobileMenu && pathname === '/saved-news' && 'navigation__button-auth_dark'}`}
                onClick={!props.loggedIn ? props.onLogin : props.onSignOut }
                type="button"
                aria-label="Авторизация">
                {`${props.loggedIn ? props.name : 'Авторизоваться'}`}
                {props.loggedIn && <img className="navigation__button-logout" src={pathname === '/saved-news' ? logoutIconDark : logoutIcon } alt="Выход" />}
                </button>
        </nav>
    )
}

export default Navigation;