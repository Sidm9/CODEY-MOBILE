/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button(props) {
    return (
        <TouchableOpacity style={darkStyles.buttonStyle} onPress={props.click}>
            <Text style={darkStyles.buttonText} > {props.text} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        height: 45,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 8,
    },
    buttonText: {
        alignItems: "center",
        justifyContent: 'center',
        color: 'white',
        fontFamily: "Montserrat-Bold",
    },
});
const darkStyles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        height: 45,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    buttonText: {
        alignItems: "center",
        justifyContent: 'center',
        color: 'black',
        fontFamily: "Montserrat-Bold",
    },
});

