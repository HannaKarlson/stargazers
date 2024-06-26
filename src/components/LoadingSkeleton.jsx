import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import colors from '../theme/colors';

const LoadingSkeleton = () => {
  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const opacityStyle = {opacity: opacityAnimation};

 
  useEffect(() => {
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
    animateElement();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            backgroundColor: colors.dark500,
            width: 150,
            height: 24,
            borderRadius: 10,
            marginBottom: 10,
          },
          opacityStyle,
        ]}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 50,
              width: 50,
              borderRadius: 25,
              marginRight: 10,
            },
            opacityStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 10,
              width: 100,
              borderRadius: 5,
            },
            opacityStyle,
          ]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 50,
              width: 50,
              borderRadius: 25,
              marginRight: 10,
            },
            opacityStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 10,
              width: 122,
              borderRadius: 5,
            },
            opacityStyle,
          ]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 50,
              width: 50,
              borderRadius: 25,
              marginRight: 10,
            },
            opacityStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 10,
              width: 110,
              borderRadius: 5,
            },
            opacityStyle,
          ]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 50,
              width: 50,
              borderRadius: 25,
              marginRight: 10,
            },
            opacityStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 10,
              width: 105,
              borderRadius: 5,
            },
            opacityStyle,
          ]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 50,
              width: 50,
              borderRadius: 25,
              marginRight: 10,
            },
            opacityStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              backgroundColor: colors.dark500,
              height: 10,
              width: 130,
              borderRadius: 5,
            },
            opacityStyle,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default LoadingSkeleton;
