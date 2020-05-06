import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            textToSearch: ''
        }
    }

    handleChange = (event) => {
        this.setState({textToSearch: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const searchTerm = this.state.textToSearch;
        this.props.search(searchTerm)
        this.clearInputs();
    }
    
    clearInputs = () => {
        this.setState({textToSearch: ''});
    }

    render(){
    return (
        <form>
            <input value={this.state.textToSearch} onChange={this.handleChange} placeholder='Search for news article here.' name='searchBar'/>
            <button onClick={this.handleSubmit}>Search</button>
        </form>
    )
    }
}

export default SearchForm;