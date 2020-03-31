import React from 'react'
import Heading from '../Components/Heading'
import { View, StyleSheet, Text } from 'react-native'
import Button from '../Components/Button'
import PlaceHolders from '../Components/PlaceHolders'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default function NewPost() {
    return (
        <>
            <View style={styles.container}>
                <Heading title=" New Post" />
                <PlaceHolders placeholder={'Enter Email'} />
                <PlaceHolders placeholder={'Enter Email'} />
                <Button text="Post" />
            </View>
        </>
    )
}
