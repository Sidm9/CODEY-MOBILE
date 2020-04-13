/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export default function FadeInView(props) {
  const position = useRef(new Animated.ValueXY(0, 0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.spring(position, {
      toValue: {x: 300, y: 100},
      // duration: 1000,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        // opacity: position, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
}
