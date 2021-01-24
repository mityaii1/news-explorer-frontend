import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNewsCardList(props) {

    return (
        <section className="news-card-list" >
            <div className="news-card-list__cards">

                {props.myArticles.map((article, idnex) => {
                    return (<NewsCard
                        key={idnex}
                        keyword={article.keyword}
                        title={article.title}
                        text={article.text}
                        date={article.date}
                        source={article.source}
                        imageUrl={article.image}
                        urlNews={article.link}
                        _id={article._id}
                        loggedIn={props.loggedIn}
                        deleteSaveNews={props.deleteSaveNews}
                        myArticles={props.myArticles}
                    />)
                })
                }
            </div>
        </section>
    );
}

export default SavedNewsCardList;