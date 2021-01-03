import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNewsCardList(props) {
    return (
        <section className="news-card-list" >
            <div className="news-card-list__cards">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </section>
    );
}

export default SavedNewsCardList;