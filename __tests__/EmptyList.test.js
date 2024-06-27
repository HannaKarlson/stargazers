import React from 'react';
import {render, screen} from '@testing-library/react-native';
import EmptyList from '../src/components/EmptyList';

describe('EmptyView', () => {
  it('should render correct text', () => {
    render(<EmptyList />);
    expect(
      screen.getByText('This repository does not have any stars'),
    ).toBeTruthy();
  });
  it('should render correct animation', () => {
    render(<EmptyList />);
    expect(screen.getByTestId('empty-animation')).toBeTruthy();
  });
});
