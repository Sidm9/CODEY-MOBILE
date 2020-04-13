import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: {x: 300, y: 100},
    }).start();
  }

  render() {
    return (
      <Animated.View style={(this.position.getLayout(), this.props.style)}>
        {this.props.children}
      </Animated.View>
    );
  }
}
