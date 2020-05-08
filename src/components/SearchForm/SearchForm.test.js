import React from 'react';
import SearchForm from './SearchForm.js';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import local from '../../data/local';


describe('Search Form', () => {

    it('should allow term to be searched', () => {
        const mockSearch = jest.fn();
        const { getByText, getByPlaceholderText } = render(<SearchForm search={mockSearch}/>);

        fireEvent.change(getByPlaceholderText('Search for news article here.'), {target: {value: 'MDRLOL'}});
        fireEvent.click(getByText('Search Now'))

        expect(mockSearch).toHaveBeenCalledWith('MDRLOL');
    });

});