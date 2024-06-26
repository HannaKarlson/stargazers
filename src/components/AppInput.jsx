import React, {useContext} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ThemeContext} from '../../App';
import {getThemeColors} from '../utils';
// trim input

const AppInput = ({icon, ...props}) => {
  const colorMode = useContext(ThemeContext);
  const {iconColor, buttonColor, text} = getThemeColors(colorMode);

  return (
    <View style={[styles.container, {backgroundColor: buttonColor}]}>
      {icon && <FontAwesomeIcon icon={icon} color={iconColor} />}
      <TextInput
        {...props}
        style={[styles.input, {color: text}]}
        placeholderTextColor={iconColor}
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
  },
  input: {
    marginHorizontal: 5,
    flex: 1,
  },
});
