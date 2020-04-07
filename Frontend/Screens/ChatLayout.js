/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, StyleSheet, View, Button } from 'react-native';


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
    chatArea : {
        
    }
});

export default function ChatLayout() {
    const [array, setarray] = useState([
         'ONE' ,
         'TWO' ,
         'THREE' ,
         'FOUR' ,
    ]);

    const [textString, settextString] = useState('');

    // useEffect(() => {
    //     return () => {
    //         setArrayHolder(...arrayHolder, array);
    //     };
    // });

    function joindata() {
        setarray()
        console.log("You Entered :" + textString);
        setarray(array.concat(textString))
        console.log(
            array
        )
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
                <View style = {styles.chatArea}>
                
                </View>
            </View>
        </>
    );
}
