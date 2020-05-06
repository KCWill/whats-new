import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    const {id, headline, img, description, url} = props.info;
    return (
        <section id={id} className='newsCard'>
            <h3>{headline}</h3>
            <img src={img}/>
            <p>{description}</p>
            <form action={url}>
                <button type='submit'>'View Story'</button>
            </form>
        </section>
    )
}

export default NewsArticle;