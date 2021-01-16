import React from 'react';
import { Link } from 'react-router-dom';
import gitHubIcon from '../../images/github-icon.svg';
import fbIcon from '../../images/fb-icon.svg';

function Footer(props) {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <nav className="footer__links-container">
                <ul className="footer__nav" >
                    <li className="footer__link-li"><Link className="footer__link" to="/" >Главная</Link></li>
                    <li><a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                </ul>
                <ul className="footer__socials">
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">
                        <img className="footer__link-social" src={gitHubIcon} alt="GitHub Icon" />
                    </a></li>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <img className="footer__link-social" src={fbIcon} alt="Facebook Icon" />
                    </a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;