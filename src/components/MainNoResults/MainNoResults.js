import React from 'react';
import noResultsImage from '../../images/no_results_image.png';

function MainNoResults() {
    return (
        <div className="main-no-results">
            <img className="main-no-results__image" src={noResultsImage} alt="Грустный смайл" />
            <h2 className="main-no-results__title">Ничего не найдено</h2>
            <p className="main-no-results__text">К сожалению по вашему запросу 
ничего не найдено.</p>
        </div>
    )
}

export default MainNoResults;