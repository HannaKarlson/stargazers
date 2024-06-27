import React from 'react';
import {View, StyleSheet} from 'react-native';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faFolder} from '@fortawesome/free-solid-svg-icons/faFolder';
import AppInput from './AppInput';
import SearchButton from './SearchButton';

const Header = ({onChangeOwner, onChangeRepo, onSearch, validSearch}) => {
  return (
    <View testID="header" style={styles.container}>
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