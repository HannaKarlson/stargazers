// import React from 'react'
// import {Animated, View, Text} from 'react-native'
// import colors from '../theme/colors'

// export default LoadingSkeleton = () => (
//     <View style={{flex:1, padding:10}}>
//         <View style={{backgroundColor:colors.dark500, width:150, height:20, borderRadius:10, margin:10}}/>
//         <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:10}}>
//             <View style={{backgroundColor:colors.dark500, height:50, width:50, borderRadius:25, marginRight:10}}/>
//             <View style={{backgroundColor:colors.dark500, height:10, width:150, borderRadius:5}}/>
//         </View>
//         <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:10}}>
//             <View style={{backgroundColor:colors.dark500, height:50, width:50, borderRadius:25, marginRight:10}}/>
//             <View style={{backgroundColor:colors.dark500, height:10, width:122, borderRadius:5}}/>
//         </View>
//         <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:10}}>
//             <View style={{backgroundColor:colors.dark500, height:50, width:50, borderRadius:25, marginRight:10}}/>
//             <View style={{backgroundColor:colors.dark500, height:10, width:160, borderRadius:5}}/>
//         </View>
//     </View>
// )

import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({

});

export default LoadingSkeleton = () => {
      const opacityAnimation = useRef(new Animated.Value(1)).current;
  const opacityStyle = {opacity: opacityAnimation};

  const animateElement = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnimation, {
          toValue: 0.7,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  useEffect(() => {
    animateElement();
  }, []);
    return(
    <>
        <Animated.View style={[{backgroundColor:colors.dark500, width:150, height:24, borderRadius:10, marginBottom:10}, opacityStyle]}/>
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:10}}>
            <Animated.View style={[{backgroundColor:colors.dark500, height:50, width:50, borderRadius:25, marginRight:10}, opacityStyle]}/>
            <Animated.View style={[{backgroundColor:colors.dark500, height:10, width:100, borderRadius:5}, opacityStyle]}/>
        </View>
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:10}}>
            <Animated.View style={[{backgroundColor:colors.dark500, height:50, width:50, borderRadius:25, marginRight:10}, opacityStyle]}/>
            <Animated.View style={[{backgroundColor:colors.dark500, height:10, width:122, borderRadius:5}, opacityStyle]}/>
        </View>
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:10}}>
            <Animated.View style={[{backgroundColor:colors.dark500, height:50, width:50, borderRadius:25, marginRight:10}, opacityStyle]}/>
            <Animated.View style={[{backgroundColor:colors.dark500, height:10, width:110, borderRadius:5}, opacityStyle]}/>
        </View>
    </>
)}


