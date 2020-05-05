import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'

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
