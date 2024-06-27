import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const deviceWidth = Dimensions.get('window').width;

const AnimationView = ({animation, testID}) => (
  <View testID={testID} style={styles.container}>
    <LottieView style={styles.lottieView} source={animation} autoPlay loop />
  </View>
);

export default AnimationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  lottieView: {
    height: deviceWidth,
    width: deviceWidth,
  },
});
