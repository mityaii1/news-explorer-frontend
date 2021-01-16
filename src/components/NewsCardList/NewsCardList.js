import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    return (
        <section className="news-card-list" >
            <h3 className="news-card-list__title">Результаты поиска</h3>
            <div className="news-card-list__cards">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
            <button className="news-card-list__button">Показать еще</button>
        </section>
    );
}

export default NewsCardList;