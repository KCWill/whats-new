import React from 'react';
import './NewsArticle.css';
import arrowIcon from '../../icons/arrow.svg'

const NewsArticle = (props) => {
    const { id, description, url, img, headline } = props.info;
    return (
        <section id={id} key={id} className='article-container'>
            <div className='image-crop'
                alt={id} style={{backgroundImage: `url(${img})`}}>
            </div>
            <h3>{headline}</h3>
            <p>{description}</p>
            <div className='buttonContainer' alt='Button container'>
            <form action={url} className='viewStoryLink'>
                <button className='viewStoryButton'type='submit'>Link to article<img className='rightArrow' src={arrowIcon} alt='Right arrow icon'/></button>
            </form>
            </div>
        </section>
    )
}

export default NewsArticle;