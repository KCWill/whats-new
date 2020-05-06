import React from 'react';
import './Menu.css'

const Menu = (props) => {
    
    const handleSelection = (event) => {
        event.preventDefault();
        const selectedCategory = event.target.name;
        props.categorySelect(selectedCategory);
    };

    return (
    <section className='menuContainer'>
        <button className='menu' name='local' onClick={handleSelection}>Local News</button>
        <button className='menu' name='technology' onClick={handleSelection}>Technology</button>
        <button className='menu' name='entertainment' onClick={handleSelection}>Entertainment</button>
        <button className='menu' name='science' onClick={handleSelection}>Science</button>
        <button className='menu' name='health' onClick={handleSelection}>Health</button>
    </section>
    );
}

export default Menu;