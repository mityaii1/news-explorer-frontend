import React from 'react';

function Preloader(props) {
    return (
        <div className={`${props.isPreloader ? "preloader" : "preloader_hidden"}`}>
            <i className="preloader__spin"></i>
            <p className="preloader__text">Идет поиск новостей...</p>
        </div>
    )
}

export default Preloader;