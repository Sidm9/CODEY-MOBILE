// import React, { Component, useRef } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     Easing,
//     Animated, // Button,
//     ScrollView,
// } from 'react-native';
// import Button from 'react-native-button';

// export default function Easein() {
//     const animatedValue = useRef(new Animated.Value(0)).current;
    
//     React.useEffect(() => {
//         animate(Easing.out) {
//             AnimatedValue.setValue(0);
//             Animated.timing(this.animatedValue, {
//                 toValue: 1,
//                 duration: 1000,
//                 easing,
//             }).start();
//         }

//         const marginLeft = animatedValue.interpolate({
//             inputRange: [0, 1],
//             outputRange: [0, 260],
//         });

//  }   
//             return(

//                 <View style={styles.container}>
//                     <Animated.View style={[styles.block, { marginLeft }]} />
//                     <ScrollView>
//                         <Text style={{ textAlign: 'center' }}>
//                             Scroll up for more animations
//           </Text>
//                         <MyButton
//                             style={styles.button}
//                             title="Out"
//                             onPress={this.animate.bind(this, Easing.out(Easing.quad))}
//                         />
//                     </ScrollView>
//                 </View>
//             );
//         }
//     }

// const MyButton = ({ onPress, title, style }) => (
//         <Button style={style} onPress={onPress}>
//             {title}
//         </Button>
//     );

//     var styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             marginTop: 60,
//         },
//         button: {
//             height: 60,
//             backgroundColor: '#ededed',
//             borderRadius: 4,
//             marginTop: 10,
//             paddingTop: 20,
//             fontSize: 18,
//         },
//         block: {
//             width: 50,
//             height: 50,
//             backgroundColor: 'red',
//         },
//     });
