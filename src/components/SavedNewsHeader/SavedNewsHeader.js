import React from 'react';

function SavedNewsHeader(props) {
    return (
        <div className="saved-news-header">
            <h1 className="saved-news-header__title">Сохранённые статьи</h1>
            <h2 className="saved-news-header__subtitle">Грета, у вас 5 сохранённых статей</h2>
            <p className="saved-news-header__tags">По ключевым словам: <span className="saved-news-header__tags_bold">Природа, Тайга</span> и <span className="saved-news-header__tags_bold">2-м другим</span></p>
        </div>
    );
}

export default SavedNewsHeader;