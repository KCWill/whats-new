import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment.js'
import health from '../../data/health.js'
import science from '../../data/science.js'
import technology from '../../data/technology.js'
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'
import SearchForm from '../SearchForm/SearchForm.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      technology: technology,
      searched: [],
      category: 'local'
    }
  }

  categorySelect = (category) => {
    this.setState({...this.state, category});
  }

  search = (term) => {
    const foundArticles = this.state[this.state.category].filter((article) => {
      return article.headline.includes(term) || article.description.includes(term)
    })
    this.setState({...this.state, category: 'searched', searched: foundArticles});
  };
  

  render () {
    return (
      <div className="app">
        <section className='topBar'>
          <h1>What's new?</h1>
          <SearchForm search={this.search} />
        </section>
        <section>
          <Menu categorySelect={this.categorySelect} category={this.state.category}/>
        </section>
        <section>
          <NewsContainer articles={this.state} category={this.state.category} />
        </section>
     
      </div>
    );
  }
}

export default App;
