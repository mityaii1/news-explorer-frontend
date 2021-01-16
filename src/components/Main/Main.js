import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MainNoResults from '../MainNoResults/MainNoResults';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Main(props) {

    return (
        <div className="main">

            <Header
                onLogin={props.onLogin}
                onMobileMenu={props.onMobileMenu}
                isPopupOpen={props.isPopupOpen} />

            <SearchForm />
            <MainNoResults />

            <NewsCardList />

            <About />

            <Footer />

        </div>
    )
}

export default Main;