import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = ({articles, category}) => {
    return (
    <section  className='newsContainer'>
    {(!articles[category].length && category === 'searched') && <h3>Your search did not produce any results.</h3>}
    {articles[category].map(article => {
        return (
            <section key={article.id}>
                <NewsArticle info={article}></NewsArticle>
            </section>
        )}
    )}
    </section>)
};

export default NewsContainer;