import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <form onSubmit={props.onSubmit} className="popup__form" name={props.name}>
                    <button className="popup__close-icon" type="button" aria-label="Закрыть" onClick={props.onClose}>
                    </button>
                    <h2 className="popup__title">{props.title}</h2>

                    {props.children}

                    <button type="submit" className={`popup__button-save ${!props.isValid && 'popup__button-save_disabled'}`}>{props.buttonText}</button>
                    <p className="popup__auth" >или&thinsp;
                        <button onClick={props.onClickLink} className="popup__auth_link" type="button">{props.linkText}</button>
                    </p>
                </form>
            </div>
        </section>
    )
}
export default PopupWithForm;
