import React from 'react';
import App from './App.js';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('App', () => {

  it('should display correct category of news', () => {
    const { getByText, queryByText } = render(<App />);
    fireEvent.click(getByText('Entertainment'));
    expect(getByText('Spider-Man Will Remain in the Marvel Cinematic Universe')).toBeInTheDocument();
    expect(queryByText('The Who postpones Denver Concert at the Pepsi Center')).toEqual(null);
  });

  it('should display correct search results', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    fireEvent.change(getByPlaceholderText('Search for news article here.'), {target: {value: 'The Who'}});
    fireEvent.click(getByText('Search Now'));
    expect(getByText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument();
  });

}); 
