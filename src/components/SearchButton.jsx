import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import colors from '../theme/colors';
import {ThemeContext} from '../contexts/ThemeContext';
import {getThemeColors} from '../utils';

const SearchButton = ({onPress, validSearch}) => {
  const colorMode = useContext(ThemeContext);
  const {buttonColor, iconColor} = getThemeColors(colorMode);
  const backgroundColor = validSearch ? colors.blue500 : buttonColor;
  const searchIconColor = validSearch ? colors.white : iconColor;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: backgroundColor}]}>
      <FontAwesomeIcon icon={faMagnifyingGlass} color={searchIconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    width: 50,
  },
});

export default SearchButton;
