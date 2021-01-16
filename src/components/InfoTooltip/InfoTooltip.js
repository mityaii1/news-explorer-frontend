import React from 'react';

function InfoTooltip(props) {
    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__container-tool-tip">
                <button className="popup__close-icon" type="button" aria-label="Закрыть" onClick={props.onClose} >
                </button>
                <p className="popup__title popup__tool-tip-title">Пользователь успешно зарегистрирован!</p>

                <button onClick={props.onClickLink} className="popup__tool-tip-link">Войти</button>


            </div>
        </section>
    )
}
export default InfoTooltip;