import React from 'react';


function SearchForm(props) {
    const [inputValue, setInputValue] = React.useState('');
    const [inputError, setInputError] = React.useState('');

    function handleChange(evt) {
        setInputValue(evt.target.value.trim());
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        if (!inputValue) {
            setInputError("Нужно ввести ключевое слово");
          } else {
            props.onSearchNews(inputValue);
          }
    }
    function handleFocus() {
        setInputError('');
      }
    return (
        <section className="search">
            <form className="search-form" onSubmit={handleSubmit} noValidate>
                <h1 className="search-form__title">Что творится в мире?</h1>
                <h2 className="search-form__subtitle" >Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
                <input 
                className={`search-form__input ${inputError && "search-form__input-error"}`} 
                type="text" 
                required
                placeholder="Введите тему новости" 
                onChange={handleChange} 
                value={inputValue || inputError}
                onFocus={handleFocus}
                />
                <button type="submit" className="search-form__button">Искать</button>
            </form>
        </section>
    )
}

export default SearchForm;