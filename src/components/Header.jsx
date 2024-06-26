import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faFolder} from '@fortawesome/free-solid-svg-icons/faFolder';
import {ThemeContext} from '../contexts/ThemeContext';
import AppInput from './AppInput';
import SearchButton from './SearchButton';

const Header = ({onChangeOwner, onChangeRepo, onSearch, validSearch}) => {
  const colorMode = useContext(ThemeContext);
  console.log({colorMode});
  return (
    <View style={styles.container}>
      <AppInput
        autoCapitalize="sentences"
        icon={faUser}
        maxLength={39}
        onChangeText={text => onChangeOwner(text)}
        placeholder="Owner"
      />
      <AppInput
        autoCapitalize="none"
        icon={faFolder}
        maxLength={250}
        placeholder="Repository"
        onChangeText={text => onChangeRepo(text)}
      />
      <SearchButton onPress={onSearch} validSearch={validSearch} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
  },
});
