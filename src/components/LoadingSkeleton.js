import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import colors from '../theme/colors';
import {styles as gazerStyles} from './Gazer';

const LoadingSkeleton = () => {
  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const opacityStyle = {opacity: opacityAnimation};

  const skeletonItems = [
    {id: 1, width: 100},
    {id: 2, width: 120},
    {id: 3, width: 105},
    {id: 4, width: 110},
    {id: 5, width: 118},
    {id: 6, width: 118},
    {id: 7, width: 108},
    {id: 8, width: 113},
    {id: 9, width: 120},
    {id: 10, width: 118},
  ];

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
  }, [opacityAnimation]);
  return (
    <View testID="loading-skeleton" style={styles.container}>
      <Animated.View
        testID="skeleton-header"
        style={[styles.header, opacityStyle]}
      />
      {skeletonItems.map(skeleton => {
        if (!skeleton.id || !skeleton.width) {
          return null;
        }
        return (
          <View
            testID="skeleton-item"
            key={skeleton.id}
            style={styles.skeletonItem}>
            <Animated.View style={[gazerStyles.avatar, opacityStyle]} />
            <Animated.View
              style={[styles.text, opacityStyle, {width: skeleton.width}]}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  skeletonItem: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  header: {
    backgroundColor: colors.dark500,
    width: 150,
    height: 24,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
    backgroundColor: colors.dark500,
    height: 10,
    borderRadius: 5,
  },
});

export default LoadingSkeleton;
