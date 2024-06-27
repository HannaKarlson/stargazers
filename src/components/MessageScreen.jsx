import React from 'react';
import {View, StyleSheet, Dimensions, Pressable, Keyboard} from 'react-native';
import AnimationView from './AnimationView';
import {getMessageContent} from '../utils';
import {AppHeader, AppText} from './AppText';

const deviceWidth = Dimensions.get('window').width;

const MessageScreen = ({message}) => {
  const {header, text, animation} = getMessageContent(message);

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <AppHeader>{header}</AppHeader>
        <AppText style={styles.text}>{text}</AppText>
      </View>

      <AnimationView animation={animation} />
    </Pressable>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  lottieView: {
    height: deviceWidth,
    width: deviceWidth,
  },
  text: {
    marginTop: 20,
  },
});
