import React from 'react';
import NewsContainer from './NewsContainer.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import local from '../../data/local';


describe('News Container', () => {

    it('should create container and pass articles to News Article', () =>{
        const { getByText } = render(<NewsContainer 
            articles={{
                local: local,
                category: 'local'
            }}
            category='local'
            />);
        
        expect(getByText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument();
        expect(getByText('Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.')).toBeInTheDocument();
    });

    it('should display no search results message', () => {
        const { getByText } = render(<NewsContainer
            articles={{searched:[]}}
            category='searched' 
            />);
        expect(getByText('Sorry, no articles matched your search.')).toBeInTheDocument();
    });


});