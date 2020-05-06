import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: [local],
      entertainment: [entertainment],
      health: [health],
      science: [science],
      technology: [technology]
    }
  }


  render () {
    return (
      <div className="app">
        <section className='topBar'>
          What's new?
        </section>
        <section>
        <Menu></Menu>
        </section>
        <section>
        <NewsContainer articles={local}></NewsContainer>
        </section>
     
      </div>
    );
  }
}

export default App;
