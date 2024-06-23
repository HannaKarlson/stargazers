import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default MessageScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Network error</Text>
            <Text style={styles.message}>The stargazers could not be fetched. Try checking your internet connection.</Text>
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
        fontWeight:'600'
    },
    message:{
        marginTop:20
    }
})