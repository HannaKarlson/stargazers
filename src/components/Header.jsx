import React from 'react'
import {View, StyleSheet, TouchableHighlight} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder'
import AppInput from './AppInput'
import SearchButton from './SearchButton'

export default Header = ({onChangeOwner, onChangeRepo, onSearch}) => {
    return(
        <View style={styles.container}>
<AppInput icon={faUser} placeholder='Owner' onChangeText={text => onChangeOwner(text)} />
<AppInput icon={faFolder} placeholder='Repository name' onChangeText={text => onChangeRepo(text)}/>
<SearchButton onPress={onSearch}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
 flexDirection:'row',
 width:'100%',
 height:50,
 paddingHorizontal:5
    }
})