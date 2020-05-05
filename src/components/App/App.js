import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }


  render () {
    return (
      <div className="app">
        {local.map( props => {
          return (
            <NewsContainer
            id={props.id}
            headline={props.headline}
            img={props.img}
            description={props.description}
            url={props.url}>
          </NewsContainer>);
        })}
      </div>
    );
  }
}

export default App;
