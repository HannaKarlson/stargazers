import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable, Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';
import AnimationView from './AnimationView';
import {getMessageText} from '../utils';
import colors from '../theme/colors';
import {AppHeader, AppText} from './AppText';
import {ThemeContext} from '../../App';
import {getThemeColors, headerStyle, textStyle} from '../utils';
import welcome from '../../assets/welcome.json'

const deviceWidth = Dimensions.get('window').width

export default MessageScreen = ({message}) => {
    console.log({message})
  const colorMode = useContext(ThemeContext);
  const {header, text, animation} = getMessageText(message);

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <AppHeader>{header}</AppHeader>
      <AppText style={styles.text}>{text}</AppText>
      </View>

<AnimationView animation={animation}/>

    </Pressable>
  );
};

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    lottieView:{
      height:deviceWidth,
      width:deviceWidth
    },
  text: {
    marginTop: 20,
  },
});
