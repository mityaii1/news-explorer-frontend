import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister(props.inputValue.email, props.inputValue.password, props.inputValue.name)
    }
    return (
        <PopupWithForm name="register" title="Регистрация" buttonText="Зарегистрироваться" linkText="Войти" isOpen={props.isOpen} onClose={props.onClose} onClickLink={props.onClickLink} onSubmit={handleSubmit} isValid={props.isValid} >
            <div className="popup__field">
                <p className="popup__label">Email</p>
                <input
                    name="email"
                    type="email"
                    className="popup__input popup__input_email"
                    placeholder="Введите почту"
                    required
                    onChange={props.onChangeValid}
                    value={props.inputValue.email || ''}
                />
                <p className="popup__input-error">{props.inputError.email}</p>
            </div>
            <div className="popup__field">
                <p className="popup__label">Пароль</p>
                <input
                    name="password"
                    type="password"
                    className="popup__input popup__input_password"
                    placeholder="Введите пароль"
                    minLength="8"
                    maxLength="30"
                    required
                    onChange={props.onChangeValid}
                    value={props.inputValue.password || ''}
                />
                <p className="popup__input-error">{props.inputError.password}</p>
            </div>
            <div className="popup__field">
                <p className="popup__label">Имя</p>
                <input
                    name="name"
                    type="text"
                    className="popup__input popup__input_name"
                    placeholder="Введите своё имя"
                    required
                    minLength="2"
                    maxLength="40"
                    onChange={props.onChangeValid}
                    value={props.inputValue.name || ''}
                />
                <p className="popup__input-error">{props.inputError.name}</p>
            </div>
            <p className="popup__submit-error">{props.submitErrorText}</p>
        </PopupWithForm>
    )
}
export default Register;