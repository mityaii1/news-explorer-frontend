import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
                className={`navigation__link ${props.onMobileMenu && pathname === '/saved-news' && 'navigation__link_dark navigation__link_active_dark'}`}
                to="/saved-news"
                onClick={props.onClose}>
                Сохранённые статьи</Link>
            <button
                className={`navigation__button-auth ${props.onMobileMenu && pathname === '/saved-news' && 'navigation__button-auth_dark'}`}
                onClick={props.onLogin}
                type="button"
                aria-label="Авторизация">
                Авторизоваться</button>
        </nav>
    )
}

export default Navigation;