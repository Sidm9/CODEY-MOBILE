/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, StyleSheet, View, Button, Text } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 8,
        color: 'black',
        flexGrow: 1,
    },
    textInputAndButtonContainer: {
        //borderWidth: 4,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    chatArea: {
        flex: 1,
        borderWidth: 3,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

});

export default function ChatLayout() {
    const [array, setarray] = useState([
        { title: 'ONE' },
    ]);

    const [textString, settextString] = useState('');

    useEffect(() => {
        return () => {
            console.log(array);
        };
    });

    function joindata() {
        console.log('You Entered :' + textString);
        setarray(array.concat({ title: textString }));
        console.log(
            'The New Element is Added'
        );
    }

    function Item({ title }) {
        return (
            <View style = {styles.item}>
                <Text>{title}</Text>
            </View>
        );
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.textInputAndButtonContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Message."
                        placeholderTextColor="black"
                        onChangeText={data => settextString(data)}>
                    </TextInput>
                    <Button title="Send" style={styles.buttonS} onPress={joindata} />
                </View>
                <View style={styles.chatArea}>
                    <FlatList
                        data={array}
                        renderItem={({ item }) => <Item title={item.key} />} />
                </View>
            </View>
        </>
    );
}
