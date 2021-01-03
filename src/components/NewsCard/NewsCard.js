import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

function NewsCard(props) {
    const { pathname } = useLocation();
    return (
        <div className="news-card__element">
            <button className={`news-card__button ${pathname === '/' && ' news-card__button-save'} ${pathname === '/saved-news' && 'news-card__button-trash'}`} type="button"></button>
            <span className="news-card__tooltip" >Убрать из сохранённых</span>
            {pathname === '/saved-news' && <p className="news-card__tag">Природа</p> }
            <img className="news-card__image" alt="props" src="http://img.crazys.info/files/i/2009.1.8/1231393633_highquality20070806064.jpg" />
            <Link className="news-card__link" to="/" >
                <p className="news-card__date">2 августа, 2019</p>
                <h3 className="news-card__title">«Первозданная тайга»: новый фотопроект Игоря Шпиленка</h3>
                <p className="news-card__text">Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы. Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.</p>
                <p className="news-card__source">ЛЕНТА.РУ</p>
            </Link>
        </div>
    );
}

export default NewsCard;