import React, { Component } from 'react';
import './Menu.css'
import entertainmentIcon from '../../icons/entertainment.svg'
import healthIcon from '../../icons/health.svg'
import localNewsIcon from '../../icons/local-news.svg'
import scienceIcon from '../../icons/science.svg'
import technologyIcon from '../../icons/technology.svg'

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            local: true,
            technology: false,
            entertainment: false,
            science: false,
            health: false,
        }
    }

    handleSelection = (event) => {
        event.preventDefault();
        const selectedCategory = event.target.closest('button').name;
        const newButtonStyling = {...this.state, local: false, technology: false, entertainment: false, science: false, health: false, [event.target.closest('button').name]: true}
        this.setState(newButtonStyling);
        this.props.categorySelect(selectedCategory);
    };

    render() {
    return (
    <section className='menuContainer'>
        <button className={`menu ${this.state.local && 'currentPage'}`} name='local' onClick={this.handleSelection} >
            <img className='menu' src={localNewsIcon} alt='Menu icon'/>
            <p className='menuText'>Local News</p>
        </button>
        <button className={`menu ${this.state.technology && 'currentPage'}`} name='technology' onClick={this.handleSelection} >
            <img className='menu' src={technologyIcon} alt='Menu icon'/>
            <p className='menuText'>Technology</p>
        </button>
        <button className={`menu ${this.state.entertainment && 'currentPage'}`} name='entertainment' onClick={this.handleSelection}>
            <img className='menu' src={entertainmentIcon} alt='Menu icon'/>
            <p className='menuText'>Entertainment</p>
        </button>
        <button className={`menu ${this.state.science && 'currentPage'}`} name='science' onClick={this.handleSelection}>
            <img className='menu' src={scienceIcon} alt='Menu icon'/>
            <p className='menuText'>Science</p>
        </button>
        <button className={`menu ${this.state.health && 'currentPage'}`} name='health' onClick={this.handleSelection}>
            <img className='menu' src={healthIcon} alt='Menu icon'/><p className='menuText'>Health</p>
        </button>
    </section>
    )
    };
}

export default Menu;