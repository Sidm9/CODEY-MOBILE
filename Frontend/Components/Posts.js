/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';


import { NeomorphBox } from 'react-native-neomorph-shadows';
import Card from './Card';
export default function Posts() {
    return (
        <>
            <ScrollView>
                <View style={styles.Header}>
                    <Text style={{ fontSize: 50, fontFamily: 'Montserrat-Bold' }}> Posts </Text>
                </View>
                <View style={styles.container}>
                    <Card />
                    <Card />
                </View>
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        marginBottom: 30,
        fontFamily: 'Montserrat-Regular',
    },
    Header: {
        paddingTop: 10,
        paddingLeft: 10,


    },

    postCard: {
        width: 300,
        height: 50,
        marginBottom: 30,
    },
    neorphboxStyling: {
        shadowRadius: 2,
        borderRadius: 25,
        backgroundColor: '#EEF1F6',
        width: 300,
        height: 50,
    },
});
