import React from 'react';
import {render, screen} from '@testing-library/react-native';
import AppInput from '../src/components/AppInput';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

const props = {
  icon: faUser,
  placeholder: 'testPlaceholder',
};

describe('AppInput', () => {
  it('should render a text input', () => {
    render(<AppInput {...props} />);
    expect(screen.getByPlaceholderText('testPlaceholder')).toBeTruthy();
  });
  it('should render correct icon', () => {
    render(<AppInput {...props} />);
    expect(screen.getByTestId(faUser.iconName)).toBeTruthy();
  });
});
