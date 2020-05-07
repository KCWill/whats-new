import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
    return (
    <section  className='newsContainer'>
    {!props.articles[props.category].length && <h3>Sorry, no articles matched your search.</h3>}
    {props.articles[props.category].map(article => {
        return (
            <section key={article.id}>
                <NewsArticle info={article}></NewsArticle>
            </section>
        )}
    )}
    </section>)
};

export default NewsContainer;