/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    socialButtonsContainer: {
        width: '95%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf :"center",
        justifyContent :"center",
        marginLeft : 15,
        marginRight : 15,
    },
    socialButtons: {
        width: 45,
        height: '100%',
        margin: 3,
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default function ShareIconsGrid() {
    const TwitterWhiteBG = require('../assets/icons/TwitterWhiteBG.png');
    const TwitterDarkBG = require('../assets/icons/TwitterDarkBG.png');
    const LinkDarkBG = require('../assets/icons/LinkDarkBG.png');
    const LinkWhiteBG = require('../assets/icons/LinkWhiteBG.png');
    const WhatsappDarkBG = require('../assets/icons/WhatsappDarkBG.png');
    const WhatsappWhiteBG = require('../assets/icons/WhatsappWhiteBG.png');
    const ShareWhiteBG = require('../assets/icons/ShareWhiteBG.png');
    const ShareDarkBG = require('../assets/icons/ShareDarkBG.png');
    const FacebookDarkBG = require('../assets/icons/FacebookDarkBG.png');
    const FacebookWhiteBG = require('../assets/icons/FacebookWhiteBG.png');
    return (
        <>
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity>
                    <View style={styles.socialButtons}>
                        <Image source={TwitterWhiteBG} style={styles.socialButtons} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.socialButtons}>
                        <Image source={LinkWhiteBG} style={styles.socialButtons} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.socialButtons}>
                        <Image source={FacebookWhiteBG} style={styles.socialButtons} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.socialButtons}>
                        <Image source={WhatsappWhiteBG} style={styles.socialButtons} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.socialButtons}>
                        <Image source={ShareWhiteBG} style={styles.socialButtons} />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}
