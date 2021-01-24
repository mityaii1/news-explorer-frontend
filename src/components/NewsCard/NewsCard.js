import React from 'react';
import { useLocation } from 'react-router-dom';

function NewsCard(props) {
    const { pathname } = useLocation();
    const [saved, setSaved] = React.useState(false);
    
    const dateFormat = (date) => {
        const newDateFormat = new Date(date);
        return `${newDateFormat.toLocaleDateString('ru', { day: 'numeric', month: 'long' })}, ${newDateFormat.getFullYear()}`
    }

    const handleClick = () => {
        props.mySavedNews({
            keyword: props.keyword,
            title: props.title,
            text: props.text,
            date: props.date,
            source: props.source,
            link: props.urlNews,
            image: props.imageUrl,
            article: props.article,
            myArticle: props.myArticle
        });
    }

    React.useEffect(() => {
        if (props.myArticles) {
            setSaved(props.myArticles.some((c) => c.title === props.title));
        }
    }, [props.myArticles, props.title])

    return (
        <div className="news-card__element">
            {
                !props.loggedIn && pathname === '/' ?
                    (
                        <>
                            <button
                                className={`news-card__button ${pathname === '/' && ' news-card__button-save'} ${pathname === '/saved-news' && 'news-card__button-trash'}`}
                                type="button"
                                onClick={props.onLogin} >
                            </button>
                            <span className="news-card__tooltip" >Войдите, чтобы сохранять статьи</span>
                        </>
                    )
                    :
                    (
                        <>
                            <button
                                className={`news-card__button ${pathname === '/' && !saved ? ' news-card__button-save' : ' news-card__button-save_active'} ${pathname === '/saved-news' && 'news-card__button-trash'}`}
                                type="button"
                                onClick={pathname === '/' && !saved ?  handleClick : props.deleteSaveNews}
                            >
                            </button>
                            <span className="news-card__tooltip" >{!saved ? 'Сохранить статью' : 'Убрать из сохранённых'}</span>
                        </>
                    )
            }
            
            <p className={`${pathname === '/saved-news' ? "news-card__tag" : "news-card__tag_hidden"}`}>{props.keyword}</p>
            <img className="news-card__image" alt={props.title} src={props.imageUrl} />
            <a className="news-card__link" href={props.urlNews} target="_blank" rel="noreferrer">
                <p className="news-card__date">{dateFormat(props.date)}</p>
                <h3 className="news-card__title">{props.title}</h3>
                <p className="news-card__text">{props.text}</p>
                <p className="news-card__source">{props.source}</p>
            </a>
        </div>
    );
}

export default NewsCard;