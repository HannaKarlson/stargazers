import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

// add placeholder
//onLoadEnd

export default Gazer = ({item}) => (
    <View style={styles.container}>
        <Image style={styles.avatar} src={item.avatar_url}/>
        <Text style={styles.text}>{item.login}</Text>
    </View>
)

const styles= StyleSheet.create({
    container:{
flexDirection:'row',
alignItems:'center'
    },
    avatar:{
        height:50,
        width:50,
        backgroundColor:'grey',
        borderRadius:25
    },
    text:{
        marginLeft:10
    }
})