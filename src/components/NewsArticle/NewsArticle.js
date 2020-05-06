import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    const { id, description, url, img, headline } = props.info;
    return (
        <section id={id} key={id} className='newsCard'>
            <h3>{headline}</h3>
            <img alt={id} src={img}/>
            <p>{description}</p>
            <form action={url}>
                <button className='viewStory' type='submit'>'View Story'</button>
            </form>
        </section>
    )
}

export default NewsArticle;