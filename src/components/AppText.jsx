import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {getThemeColors} from '../utils';
import {ThemeContext} from '../../App';

export const AppText = ({children, style}) => {
  const colorMode = useContext(ThemeContext);
  const {text} = getThemeColors(colorMode);
  return <Text style={[styles.text, {color: text}, style]}>{children}</Text>;
};

export const AppHeader = ({children}) => {
  const colorMode = useContext(ThemeContext);
  const {text} = getThemeColors(colorMode);
  return <Text style={[styles.header, {color: text}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
});
