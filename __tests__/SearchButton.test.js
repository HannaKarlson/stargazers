import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import SearchButton from '../src/components/SearchButton';
import colors from '../src/theme/colors';
const mockedOnPress = jest.fn();

const setUp = (validSearch = false) => {
  return {
    onPress: mockedOnPress,
    validSearch: validSearch,
  };
};

describe('SearchButton', () => {
  it('should call correct function when pressed', () => {
    const props = setUp();
    render(<SearchButton {...props} />);
    fireEvent.press(screen.getByRole('button'));
    expect(mockedOnPress).toHaveBeenCalledTimes(1);
  });
  it('should render the correct icon', () => {
    const props = setUp();
    render(<SearchButton {...props} />);
    expect(screen.getByTestId('magnifying-glass')).toBeTruthy();
  });
  it('should render with correct colors when search is NOT valid', () => {
    const props = setUp();
    render(<SearchButton {...props} />);
    expect(screen.getByRole('button').props.style.backgroundColor).toBe(
      colors.dark800,
    );
  });
  it('should render with correct colors when search is valid', () => {
    const props = setUp(true);
    render(<SearchButton {...props} />);
    expect(screen.getByRole('button').props.style.backgroundColor).toBe(
      colors.blue500,
    );
  });
});
