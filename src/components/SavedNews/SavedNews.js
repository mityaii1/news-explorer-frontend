import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNewsCardList from '../SavedNewsCardList/SavedNewsCardList';
import Footer from '../Footer/Footer';


function SavedNews(props) {
    return (
        <div className="saved-news">
            <Header
                onLogin={props.onLogin}
                onMobileMenu={props.onMobileMenu}
                loggedIn={props.loggedIn}
                name={props.name}
                onSignOut={props.onSignOut}
                />
            <SavedNewsHeader 
            myArticles={props.myArticles}
            keyword={props.keyword}
            />
            <SavedNewsCardList
            myArticles={props.myArticles}
            keyword={props.keyword}
            loggedIn={props.loggedIn}
            deleteSaveNews={props.deleteSaveNews}
             />
            <Footer />
        </div>
    )
}

export default SavedNews;