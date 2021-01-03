import React from 'react';

function handleChange(evt) {

}
function SearchForm(props) {
    return (
        <section className="search">
            <form className="search-form" onSubmit={props.onSubmit}>
                <h1 className="search-form__title">Что творится в мире?</h1>
                <h2 className='search-form__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
                <input className="search-form__input" type="text" placeholder="Введите тему новости" onChange={handleChange} />
                <button type="submit" className="search-form__button">Искать</button>
            </form>
        </section>
    )
}

export default SearchForm;