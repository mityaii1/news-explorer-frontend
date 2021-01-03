import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
    return (
        <PopupWithForm name="login" title="Вход" buttonText="Войти" linkText="Зарегистрироваться" isOpen={props.isOpen} onClose={props.onClose} onClickLink={props.onClickLink} isValid={props.isValid} >
            <div className="popup__field">
                <p className="popup__label">Email</p>
                <input
                    name="email"
                    type="email"
                    id="email-input"
                    className="popup__input popup__input_email"
                    placeholder="Введите почту"
                    required
                    onChange={props.onChangeValid}
                    value={props.inputValue.email || ''}
                />
                <p className="popup__input-error" id="email-input-error">{props.inputError.email}</p>
            </div>
            <div className="popup__field">
                <p className="popup__label">Пароль</p>
                <input
                    name="password"
                    type="password"
                    id="password-input"
                    className="popup__input popup__input_password"
                    placeholder="Введите пароль"
                    minLength="8"
                    maxLength="30"
                    required
                    onChange={props.onChangeValid}
                    value={props.inputValue.password || ''}
                />
                <p className="popup__input-error" id="password-input-error">{props.inputError.password}</p>
            </div>
            <p className="popup__submit-error" id="login-submit-error"></p>
        </PopupWithForm>
    )
}
export default Login;