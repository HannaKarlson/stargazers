import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import colors from '../theme/colors'


export default AppInput = ({icon, ...props}) => {
return(
    <View style={styles.container}>
        {icon && <FontAwesomeIcon icon={icon} style={styles.icon} color={colors.dark400}/>}
        <TextInput {...props} style={styles.input}/>
    </View>
)

}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        flexDirection:'row',
        backgroundColor:colors.dark800,
        borderRadius:10,
        paddingHorizontal:10,
        marginRight:5
    },
    icon:{
        //marginRight:2
    },
    input:{
marginHorizontal:5,
color:colors.dark50
    }
})