import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getMessageText} from '../utils';
import colors from '../theme/colors';
import {AppHeader, AppText} from './AppText';
import {ThemeContext} from '../../App';
import {getThemeColors, headerStyle, textStyle} from '../utils';

export default MessageScreen = ({message}) => {
    console.log({message})
  const colorMode = useContext(ThemeContext);
  const {header, text} = getMessageText(message);

  return (
    <>
      <AppHeader>{header}</AppHeader>
      <AppText style={styles.text}>{text}</AppText>
    </>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
  text: {
    marginTop: 20,
  },
});
