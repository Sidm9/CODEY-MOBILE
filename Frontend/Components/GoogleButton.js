/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

function GoogleButton(props) {
    return (
        <TouchableOpacity>
            <Image
                source={require('../assets/images/btn_google_signin_dark_normal_web.png')}
                resizeMode="cover"
                style={styles.headerImage}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 207,
        height: 40,
        borderColor: '#707070',
        borderWidth: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'blue',

    },
});

export default GoogleButton;