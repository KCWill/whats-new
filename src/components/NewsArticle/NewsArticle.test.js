import React from 'react';
import NewsArticle from './NewsArticle.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('News Article', () => {
    it('should display news article on page', () =>{
        const { getByText } = render(<NewsArticle 
            info={{
                id: 1,
                description:'The quick brown fox jumps over the lazy dog',
                url:'http://www.google.com',
                img:'http://www.google.com/images',
                headline:'Quick Fox, Lazy Dog'
            }}
            />);
        
        expect(getByText('The quick brown fox jumps over the lazy dog')).toBeInTheDocument();
        expect(getByText('Quick Fox, Lazy Dog')).toBeInTheDocument();
    });
});