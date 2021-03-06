/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export default function Easein(props) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0], // 0 : 150, 0.5 : 75, 1 : 0
            }),
          },
        ],
      }}>
      {props.children}
    </Animated.View>
  );
}
