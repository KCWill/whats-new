import React from 'react';
import './NewsContainer.css'

const NewsContainer = (props) => {
    return (
        <section>
            <h3>{props.headline}</h3>
            <img src={props.img}/>
            <p>{props.description}</p>
            <form action={props.url}>
                <button type='submit' value='View story'></button>
            </form>
        </section>
    )

};

export default NewsContainer;