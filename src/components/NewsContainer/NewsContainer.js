import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
    return (
    <section  className='newsContainer'>
    {props.articles.map(article => {
        return (
            <section className='newsCard'>
                <NewsArticle info={article}></NewsArticle>
            </section>
        )}
    )}
    </section>)
};

export default NewsContainer;