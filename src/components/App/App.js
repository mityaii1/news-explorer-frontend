import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import PopupMobileMenu from '../PopupMobileMenu/PopupMobileMenu';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { setToken, getToken, removeToken } from '../../utils/token';
import * as mainApi from '../../utils/MainApi';
import * as newsApi from '../../utils/NewsApi';

function App() {
    const history = useHistory();
    const [currentUser, setCurrentUser] = React.useState(null);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
    const [isPopupMobileMenuOpen, setIsPopupMobileMenuOpen] = React.useState(false);

    const [isValid, setIsValid] = React.useState(false);
    const [inputError, setInputError] = React.useState({});
    const [inputValue, setInputValue] = React.useState({});
    const [submitErrorText, setSubmitErrorText] = React.useState('');

    const [preloader, setPreloader] = React.useState(false);
    const [isMainNoResults, setIsMainNoResults] = React.useState(false);

    const [articles, setArticles] = React.useState([]);
    const [myArticles, setMyArticles] = React.useState([]);
    const [keyword, setKeyword] = React.useState('');


    const handleChangeValid = (evt) => {
        setIsValid(evt.target.closest('form').checkValidity());
        setInputError({ ...inputError, [evt.target.name]: evt.target.validationMessage });
        setInputValue({ ...inputValue, [evt.target.name]: evt.target.value.trim() });
    }
    const resetFormValid = () => {
        setInputError({});
        setIsValid(false);
        setInputValue({});
        setSubmitErrorText('');
    }

    const handleLoginClick = () => {
        setIsLoginOpen(!isLoginOpen);
        setIsRegisterOpen(false)
        setInfoTooltipOpen(false)
        setIsPopupMobileMenuOpen(false)
        resetFormValid()
    }
    const handleRegisterClick = () => {
        setIsRegisterOpen(!isRegisterOpen);
        setIsLoginOpen(false);
        resetFormValid()
    }
    const handleInfoTooltipClick = () => {
        setInfoTooltipOpen(!isInfoTooltipOpen);
        setIsRegisterOpen(false);
    }
    const handleMobileMenuClick = () => {
        setIsPopupMobileMenuOpen(!isPopupMobileMenuOpen);
    }
    const closeAllPopups = () => {
        setIsLoginOpen(false)
        setIsRegisterOpen(false)
        setInfoTooltipOpen(false)
        setIsPopupMobileMenuOpen(false)
    }

    const getUserInfo = (res) => {
        mainApi.checkToken(res.token)
            .then((res) => {
                setCurrentUser(res.name)
            })
    }

    const handleRegister = (email, password, name) => {
        mainApi.register(email, password, name)
            .then((res) => {
                if (res) {
                    handleInfoTooltipClick()
                }
            })
            .catch((err) => {
                console.log(err.status)
                if (err.status === 409) {
                    setSubmitErrorText('Пользователь с таким email уже существует');
                } else if (err.status === 400) {
                    setSubmitErrorText('Hекорректно заполнено одно из полей');
                }
                else {
                    setSubmitErrorText('Что-то пошло не так! Попробуйте ещё раз.');
                }
            })
    }
    const handleLogin = (email, password) => {
        mainApi.authorize(email, password)
            .then((res) => {
                if (res) {
                    setLoggedIn(true);
                    setToken(res.token);
                    getUserInfo(res)
                    history.push('/')
                    closeAllPopups();
                }
            })
            .catch((err) => {
                if (err.status === 401) {
                    setSubmitErrorText('Пользователь с таким email не найден')
                } else if (err.status === 400) {
                    setSubmitErrorText('Неправильные почта или пароль')
                } else {
                    setSubmitErrorText('Что-то пошло не так! Попробуйте ещё раз.');
                }

            })
    }

    const tokenCheck = () => {
        const jwt = getToken();
        if (!jwt) {
            return;
        }
        Promise.all([mainApi.checkToken(jwt), mainApi.getMyArticles(jwt)])

            .then(([res, myArticles]) => {
                if (res) {
                    setCurrentUser(res.name)
                    setLoggedIn(true);
                    setMyArticles(myArticles.reverse(), jwt)
                }
            })
            .catch((err) => {
                if (err.status === 401) {
                    console.log('Переданный токен некорректен');
                } else if (err.status === 400) {
                    console.log('Токен не передан или передан не в том формате');
                }
            });
    }

    const handleSearchNews = (keyword) => {
        setArticles([])
        setPreloader(true)
        setIsMainNoResults(false)
        newsApi.getNewsArticle(keyword)
            .then((res) => {
                if (res) {
                    localStorage.setItem('articles', JSON.stringify(res.articles));
                    localStorage.setItem('keyword', keyword);
                    setArticles(res.articles)
                    setKeyword(keyword);
                }
                if (res.articles.length === 0) {
                    setIsMainNoResults(true)
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setPreloader(false)
            })

    }

    function handleSaveNews({ keyword, title, text, date, source, link, image }) {
        const jwt = getToken();
        if (!jwt) {
            return;
        }
        return mainApi.saveArticle({ keyword, title, text, date, source, link, image }, jwt)
            .then((res) => {
                setMyArticles([...myArticles, res,]);
            })
            .catch((err) => console.log('Request Error - ' + err))
    }

    const handleArticleDelete = () => {
        const jwt = getToken();
        if (!jwt) {
            return;
        }
        const myArticlesId = myArticles.find((item) => {
            return item
        })
        mainApi.deleteArticle(myArticlesId._id, jwt)
            .then(() => {
                setMyArticles(myArticles.filter((c) => c._id !== myArticlesId._id));
            })
            .catch((err) => console.log('Ошибка удаления карточки : ', err))

    }

    const articlesCheck = () => {
        const articles = JSON.parse(localStorage.getItem('articles'));
        setArticles(articles || []);
    }
    const keywordCheck = () => {
        setKeyword(localStorage.getItem('keyword'));
    }

    React.useEffect(() => {
        tokenCheck();
        articlesCheck();
        keywordCheck();
    }, []);

    React.useEffect(() => {
        window.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                closeAllPopups();
            }
        });
    }, []);

    React.useEffect(() => {
        window.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                closeAllPopups();
            }
        });
    }, []);

    const onSignOut = () => {
        removeToken()
        localStorage.removeItem('articles');
        localStorage.removeItem('keyword');
        history.push('/');
        setLoggedIn(false);
    }


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Switch>
                    <Route exact path="/">

                        <Main
                            onMobileMenu={handleMobileMenuClick}
                            onLogin={handleLoginClick}
                            isPopupOpen={isLoginOpen || isRegisterOpen || isInfoTooltipOpen}
                            loggedIn={loggedIn}
                            name={currentUser}
                            onSignOut={onSignOut}
                            onSearchNews={handleSearchNews}
                            isPreloader={preloader}
                            isMainNoResults={isMainNoResults}
                            articles={articles}
                            keyword={keyword}
                            mySavedNews={handleSaveNews}
                            deleteSaveNews={handleArticleDelete}
                            myArticles={myArticles}
                        />
                    </Route>
                    <ProtectedRoute exact path="/saved-news" loggedIn={loggedIn} component={SavedNews}
                        onMobileMenu={handleMobileMenuClick}
                        onLogin={handleLoginClick}
                        name={currentUser}
                        onSignOut={onSignOut}
                        myArticles={myArticles}
                        articles={articles}
                        keyword={keyword}
                        deleteSaveNews={handleArticleDelete}>

                    </ProtectedRoute>
                </Switch>
                <Route path="*">
                    {loggedIn ? <Redirect to="/saved-news" /> : <Redirect to="/" /> }
                </Route>
                <Login
                    isOpen={isLoginOpen}
                    onClose={closeAllPopups}
                    onClickLink={handleRegisterClick}
                    isValid={isValid}
                    onChangeValid={handleChangeValid}
                    inputError={inputError}
                    inputValue={inputValue}
                    submitErrorText={submitErrorText}
                    onLogin={handleLogin}
                />
                <Register
                    isOpen={isRegisterOpen}
                    onClose={closeAllPopups}
                    onClickLink={handleLoginClick}
                    isValid={isValid}
                    onChangeValid={handleChangeValid}
                    inputError={inputError}
                    inputValue={inputValue}
                    submitErrorText={submitErrorText}
                    onRegister={handleRegister}
                />
                <InfoTooltip
                    isOpen={isInfoTooltipOpen}
                    onClickLink={handleLoginClick}
                    onClose={closeAllPopups} />
                <PopupMobileMenu
                    isOpen={isPopupMobileMenuOpen}
                    onLogin={handleLoginClick}
                    onClose={closeAllPopups}
                    loggedIn={loggedIn}
                />
            </div>
        </CurrentUserContext.Provider>
    );

}

export default App;