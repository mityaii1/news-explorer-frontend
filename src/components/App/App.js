import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import PopupMobileMenu from '../PopupMobileMenu/PopupMobileMenu';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';



function App() {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
    const [isPopupMobileMenuOpen, setIsPopupMobileMenuOpen] = React.useState(false);

    const [isValid, setIsValid] = React.useState(false);
    const [inputError, setInputError] = React.useState({});
    const [inputValue, setInputValue] = React.useState({});

    const handleChangeValid = (evt) => {
        setIsValid(evt.target.closest('form').checkValidity());
        setInputError({ ...inputError, [evt.target.name]: evt.target.validationMessage });
        setInputValue({ ...inputValue, [evt.target.name]: evt.target.value });
    }
    const resetFormValid = () => {
        setInputError({});
        setIsValid(false);
        setInputValue({});
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

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Switch>
                    <Route exact path="/">

                        <Main
                            onMobileMenu={handleMobileMenuClick}
                            onLogin={handleLoginClick}
                            isPopupOpen={isLoginOpen || isRegisterOpen || isInfoTooltipOpen}
                        />
                    </Route>
                    <Route exact path="/saved-news">
                        <SavedNews
                            onMobileMenu={handleMobileMenuClick}
                            onLogin={handleLoginClick}
                        />
                    </Route>
                </Switch>
                <Login
                    isOpen={isLoginOpen}
                    onClose={closeAllPopups}
                    onClickLink={handleRegisterClick}
                    isValid={isValid}
                    onChangeValid={handleChangeValid}
                    inputError={inputError}
                    inputValue={inputValue}
                />
                <Register
                    isOpen={isRegisterOpen}
                    onClose={closeAllPopups}
                    onClickLink={handleLoginClick}
                    onInfoTooltip={handleInfoTooltipClick}
                    isValid={isValid}
                    onChangeValid={handleChangeValid}
                    inputError={inputError}
                    inputValue={inputValue}
                    />
                <InfoTooltip
                    isOpen={isInfoTooltipOpen}
                    onClickLink={handleLoginClick}
                    onClose={closeAllPopups} />
                <PopupMobileMenu
                    isOpen={isPopupMobileMenuOpen}
                    onLogin={handleLoginClick}
                    onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );

}

export default App;