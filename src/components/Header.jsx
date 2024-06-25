import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faFolder} from '@fortawesome/free-solid-svg-icons/faFolder';
import { ThemeContext } from '../../App';
import AppInput from './AppInput';
import SearchButton from './SearchButton';
import colors from '../theme/colors';

export default Header = ({
  onChangeOwner,
  onChangeRepo,
  onSearch,
  validSearch,
}) => {
 const colorMode = useContext(ThemeContext)
 console.log({colorMode})
  return (
    <View style={styles.container}>
      <AppInput
        icon={faUser}
        maxLength={39}
        onChangeText={text => onChangeOwner(text)}
        placeholder="Owner"
      />
      <AppInput
        icon={faFolder}
        maxLength={250}
        placeholder="Repository name"
        onChangeText={text => onChangeRepo(text)}
      />
      <SearchButton onPress={onSearch} validSearch={validSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
  },
});
