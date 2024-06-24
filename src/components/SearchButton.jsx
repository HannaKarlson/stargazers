import React from 'react'
import { TouchableOpacity, View, StyleSheet} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import colors from '../theme/colors'

export default SearchButton = ({onPress, validSearch}) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, validSearch && {backgroundColor:colors.blue500}]}>
<FontAwesomeIcon icon={faMagnifyingGlass} color={validSearch?'white':colors.dark400}/>
</TouchableOpacity>
)

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.dark800,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        height:50,
        width:50,
      //  borderWidth:2,
      //  borderColor:colors.dark400
    }
})