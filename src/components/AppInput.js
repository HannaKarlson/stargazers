import React, {useContext} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ThemeContext} from '../contexts/ThemeContext';
import {getThemeColors} from '../utils';
import colors from '../theme/colors';

const AppInput = ({icon, error, ...props}) => {
  const colorMode = useContext(ThemeContext);
  const {iconColor, buttonColor, text} = getThemeColors(colorMode);

  return (
    <View
      testID="app-input"
      style={[
        styles.container,
        {backgroundColor: buttonColor},
        error && styles.error,
      ]}>
      {icon && (
        <FontAwesomeIcon icon={icon} testID={icon.iconName} color={iconColor} />
      )}
      <TextInput
        {...props}
        style={[styles.input, {color: text}]}
        placeholderTextColor={iconColor}
        showSoftInputOnFocus={true}
        autoCorrect={false}
        autoComplete="off"
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  input: {
    marginHorizontal: 5,
    flex: 1,
  },
  error: {
    borderColor: colors.error,
  },
});
