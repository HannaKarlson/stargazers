import React from 'react';
import {render, screen} from '@testing-library/react-native';
import MessageScreen from '../src/components/MessageScreen';

describe('MessageScreen', () => {
  it('should render correct header text', () => {
    render(<MessageScreen message="Some message" />);
    expect(screen.getByText('Error')).toBeTruthy();
  });
  it('should render correct info text', () => {
    render(<MessageScreen message="Some message" />);
    expect(screen.getByText('Something went wrong')).toBeTruthy();
  });
  it('should render animation', () => {
    render(<MessageScreen message="Some message" />);
    expect(screen.getByTestId('Error-animation')).toBeTruthy();
  });
});
