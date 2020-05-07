import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
    return (
    <section  className='newsContainer'>
    {!props.articles[props.category].length && (<div alt='No search results' className='noResultsContainer'><h3 className='noResult'>Sorry, no articles matched your search.</h3><h3 className='noResult'>Click a category to restart your search!</h3></div>)}
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