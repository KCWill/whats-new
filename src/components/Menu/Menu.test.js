import React from 'react';
import Menu from './Menu.js';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Menu', () => {

    it('should display news categories', () => {
        const { getByText } = render(<Menu categorySelect='' category='local' />)
        expect(getByText('Local News')).toBeInTheDocument();
        expect(getByText('Technology')).toBeInTheDocument();
        expect(getByText('Entertainment')).toBeInTheDocument();
        expect(getByText('Science')).toBeInTheDocument();
    });

    it('should return selected category', () => {
        const mockCategorySelect = jest.fn();
        const { getByText } = render(<Menu 
            categorySelect={mockCategorySelect} 
            category='local' 
            />);
        fireEvent.click(getByText('Local News'));
        expect(mockCategorySelect).toHaveBeenCalledWith('local')
    })

    it('should highlight selected category button', () => {
        const mockCategorySelect = jest.fn();
        const { getByText, getByTestId } = render(<Menu 
            categorySelect={mockCategorySelect} 
            category='local' 
            />);
        const entertainmentButton = getByTestId('entertainment-button');
        fireEvent.click(getByText('Entertainment'));
        expect(entertainmentButton).toHaveClass('currentPage');
    });
});