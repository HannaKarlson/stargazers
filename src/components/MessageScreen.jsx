import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { getMessageText } from '../utils'
import colors from '../theme/colors'

export default MessageScreen = ({message}) => {
    console.log({message})
    const {header, text} = getMessageText(message)
    return(
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    header:{
        fontSize:24,
        fontWeight:'600',
        color: colors.dark50
    },
    text:{
        marginTop:20,
        fontSize:18,
        color: colors.dark50
    }
})