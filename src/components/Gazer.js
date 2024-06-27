import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppText} from './AppText';
import colors from '../theme/colors';

const Gazer = ({item}) => {
  if (!item || !item.login) {
    return null;
  }
  return (
    <View testId="gazer-view" style={styles.container}>
      <FastImage
        testID={item.avatar_url}
        style={styles.avatar}
        source={{uri: item.avatar_url}}
      />
      <AppText style={styles.text}>{item.login}</AppText>
    </View>
  );
};

export default Gazer;

export const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: colors.dark500,
    borderRadius: 25,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    marginLeft: 10,
  },
});
