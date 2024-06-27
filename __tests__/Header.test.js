import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Header from '../src/components/Header';

const props = {
  onChangeOwner: jest.fn(),
  onChangeRepo: jest.fn(),
  onSearch: jest.fn(),
  validSearch: jest.fn(),
  error: {ownerError: false, repoError: false},
};

describe('Header', () => {
  it('should render two inputs with correct placeholders', () => {
    render(<Header {...props} />);
    expect(screen.getAllByTestId('app-input').length).toBe(2);
    expect(screen.getByPlaceholderText('Owner')).toBeTruthy();
    expect(screen.getByPlaceholderText('Repository')).toBeTruthy();
  });
  it('should render the search button', () => {
    render(<Header {...props} />);
    expect(screen.getByTestId('search-button')).toBeTruthy();
  });
});
