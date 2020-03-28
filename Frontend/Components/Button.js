/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button(props) {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.click}>
            <Text style={styles.buttonText}> {props.text} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        height: '15%',
        width :'82%',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
        alignSelf :"center",
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

