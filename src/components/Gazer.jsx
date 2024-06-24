import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../theme/colors';

export default Gazer = ({item}) => (
  <View style={styles.container}>
    <FastImage style={styles.avatar} source={{uri: item.avatar_url}} />
    <Text style={styles.text}>{item.login}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: colors.dark500,
    borderRadius: 25,
  },
  text: {
    marginLeft: 10,
    color: colors.dark50,
    fontSize: 18,
  },
});
