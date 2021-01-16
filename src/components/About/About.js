import React from 'react';
import avatar from '../../images/avatar.png';

function About(props) {
    return (
        <section className="about">
            <img src={avatar} className="about__avatar" alt="Avatar" />
            <div className="about__author">
                <h3 className="about__author-title">Об авторе</h3>
                <p className="about__author-text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете. </p>
                <p className="about__author-text">
                Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    )
}

export default About;