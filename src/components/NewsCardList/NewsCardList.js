import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function NewsCardList(props) {
    const [countShowArticles, setCountShowArticles] = React.useState(3);
    const currentUser = React.useContext(CurrentUserContext);
  
     const handleShowCards = () => {
        setCountShowArticles(countShowArticles + 3)
     }

    return (
        <section className={`${props.articles.length > 0 ? "news-card-list" : "news-card-list_hidden" }`} >
            <h3 className="news-card-list__title">Результаты поиска</h3>
            <div className="news-card-list__cards">
                {props.articles.slice(0, countShowArticles).map((article, idnex) => (
                    <NewsCard
                    loggedIn={props.loggedIn}
                    onLogin={props.onLogin}
                    key={idnex}
                    articles={props.articles}
                    keyword={props.keyword}
                    imageUrl={article.urlToImage}
                    date={article.publishedAt}
                    title={article.title}
                    text={article.description}
                    source={article.source.name}
                    urlNews={article.url}
                    _id={article._id}
                    mySavedNews={props.mySavedNews}
                    deleteSaveNews={props.deleteSaveNews}
                    currentUser={currentUser}
                    myArticles={props.myArticles}
                    />
                ))}

            </div>
            {props.articles.length >= countShowArticles &&
                <button className="news-card-list__button" onClick={handleShowCards} >Показать еще</button>}
        </section>
    );
}

export default NewsCardList;