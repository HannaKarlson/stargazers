import React from 'react';
import {View} from 'react-native';
import {AppText} from './AppText';
import AnimationView from './AnimationView';
import empty from '../../assets/empty.json';

const EmptyList = () => (
  <View>
    <AppText>This repository does not have any stars</AppText>
    <AnimationView testID="empty-animation" animation={empty} />
  </View>
);

export default EmptyList;
