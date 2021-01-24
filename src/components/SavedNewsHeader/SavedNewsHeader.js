import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const myArrKeywords = props.myArticles.map(item => item = item.keyword);
    const myKeywords = [...new Set(myArrKeywords)]

    const textNumberArticles = (number) => {
        if (number === 1) {
            return "сохраненная статья";
        } else if (number > 1 && number < 5) {
            return "сохраненные статьи";
        } else if (number >= 5) {
            return "сохраненных статей";
        } else if (number === 0) {
            return "сохраненных статей"
        }
    }

    const textNumberKeywords = (number) => {
        if (number <= 1) {
            return "По ключевому слову: ";
        } else if (number >= 2) {
            return "По ключевым словам: ";
        }
    }
    const textOthersKeywords = (number) => {
        if (number <= 0) {
            return ''
        } else if (number === 1) {
            return '-ому другому'
        } else if (number >= 2 && number <= 4) {
            return '-м другим'
        } else if (number === 7 || number === 8) {
            return '-ми другим'
        } else {
            return '-ти другим'
        }
    }
const upperCaseKeywords = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

const firstKeyword = upperCaseKeywords(myKeywords[0])
const secondKeyword = upperCaseKeywords(myKeywords[1])

    return (
        <div className="saved-news-header">
            <h1 className="saved-news-header__title">Сохранённые статьи</h1>
            <h2 className="saved-news-header__subtitle">{`${currentUser}, у вас ${props.myArticles.length === 0 ? "нет" : props.myArticles.length} ${textNumberArticles(props.myArticles.length)}`}</h2>
            {props.myArticles.length !== 0 &&
                <p className="saved-news-header__tags">{textNumberKeywords(myKeywords.length)}
{ myKeywords.length <= 1 ?
                    <span className="saved-news-header__tags_bold">{firstKeyword}
                    </span>
                    : <>
                    <span className="saved-news-header__tags_bold">{firstKeyword}, {secondKeyword}
                    </span>
                     <span className={`${myKeywords.length > 2 ? "saved-news-header__tags_bold" : "saved-news-header__tags-span_hidden"}`}> и&#8201;{myKeywords.length - 2}{textOthersKeywords(myKeywords.length - 2)}</span></>
                    }
                </p>
            }
        </div>
    );
}

export default SavedNewsHeader;