/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ButtonTemp(props) {
    return (
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.ButtonText}> {props.text} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',

        height: 40,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A8EF3',
        borderRadius: 35,
    },
    ButtonText: {
        alignItems: "center",
        justifyContent: 'center',
        color: "white",
        fontFamily: "Montserrat-Bold",
    },
});
