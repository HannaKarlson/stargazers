import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Gazer from '../src/components/Gazer';

const gazer = {
  login: 'LukeSkywalker',
  avatar_url: 'may-the-force-be-with-you',
};

describe('Gazer', () => {
  it('should render correct name', () => {
    render(<Gazer item={gazer} />);
    expect(screen.getByText('LukeSkywalker')).toBeTruthy();
  });
  it('should render correct image', () => {
    render(<Gazer item={gazer} />);
    expect(screen.getByTestId(gazer.avatar_url)).toBeTruthy();
  });
  it('should not render if gazer is undefined', () => {
    render(<Gazer item={undefined} />);
    expect(screen.queryByTestId('gazer')).toBeFalsy();
  });
  it('should not render if login is missing in gazer item', () => {
    render(<Gazer item={{}} />);
    expect(screen.queryByTestId('gazer')).toBeFalsy();
  });
});
