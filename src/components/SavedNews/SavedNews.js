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
                onMobileMenu={props.onMobileMenu} />
            <SavedNewsHeader />
            <SavedNewsCardList />
            <Footer />
        </div>
    )
}

export default SavedNews;