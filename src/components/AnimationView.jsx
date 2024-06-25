import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const deviceWidth = Dimensions.get('window').width;

export default AnimationView = ({animation}) => (
  <View style={{flex:1, alignItems:'center'}}>
    <LottieView style={styles.lottieView} source={animation} autoPlay loop />
  </View>
);

const styles = StyleSheet.create({
  lottieView: {
    height: deviceWidth,
    width: deviceWidth,
  },
});
