import React, {useContext} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../theme/colors';
import { ThemeContext } from '../../App';
import { getIconColor, getThemeColors } from '../utils';
// trim input

export default AppInput = ({icon, ...props}) => {
  const colorMode = useContext(ThemeContext)
  const {iconColor, buttonColor, text} = getThemeColors(colorMode)

  return (
    <View style={[styles.container, {backgroundColor:buttonColor}]}>
      {icon && <FontAwesomeIcon icon={icon} color={iconColor} />}
      <TextInput
        {...props}
        style={[styles.input, {color:text}]}
        placeholderTextColor={iconColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
   // backgroundColor: colors.dark800,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  input: {
    marginHorizontal: 5,
   // color: colors.dark50,
    flex:1
  },
});
