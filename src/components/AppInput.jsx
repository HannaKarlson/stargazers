import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../theme/colors';
// trim input

export default AppInput = ({icon, ...props}) => {
  return (
    <View style={styles.container}>
      {icon && <FontAwesomeIcon icon={icon} color={colors.dark400} />}
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.dark400}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.dark800,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  input: {
    marginHorizontal: 5,
    color: colors.dark50,
    flex:1
  },
});
