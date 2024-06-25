import React from 'react'
import {View, Text} from 'react-native'
import { AppText } from './AppText'
import AnimationView from './AnimationView'
import empty from '../../assets/empty.json'

export default EmptyList = () => (
    <View>
        <AppText>This reposirory does not have any stars</AppText>
        <AnimationView animation={empty}/>
    </View>
)