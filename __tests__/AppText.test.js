import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {AppText, AppHeader, styles} from '../src/components/AppText';
import colors from '../src/theme/colors';

describe('AppText', () => {
  it('should render correct text', () => {
    render(<AppText>Some nice text</AppText>);
    expect(screen.getByText('Some nice text')).toBeTruthy();
  });
  it('should render with correct style when no props are passed', () => {
    render(<AppText>Some nice text</AppText>);
    const text = screen.getByText('Some nice text');
    expect(text.props.style[0]).toEqual(styles.text);
    expect(text.props.style[1].color).toBe(colors.dark50);
    expect(text.props.style[2]).toEqual(undefined);
  });
  it('should render with correct style when style prop is passed', () => {
    render(<AppText style={{marginLeft: 10}}>Some nice text</AppText>);
    const text = screen.getByText('Some nice text');
    expect(text.props.style[0]).toEqual(styles.text);
    expect(text.props.style[2]).toEqual({marginLeft: 10});
  });
});
describe('AppHeader', () => {
  it('should render correct text', () => {
    render(<AppHeader>A fancy header</AppHeader>);
    expect(screen.getByText('A fancy header')).toBeTruthy();
  });
  it('should render with correct props', () => {
    render(<AppHeader>A fancy header</AppHeader>);
    const text = screen.getByText('A fancy header');
    expect(text.props.style[0]).toEqual(styles.header);
    expect(text.props.style[1].color).toBe(colors.dark50);
  });
});
