/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import ImageHolder from '../Components/ImageHolder';
import Header from '../Components/Navbar';
import Card from '../Components/Card';
import SearchBar from '../Components/SearchBar';
import Heading from '../Components/Heading';
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //borderWidth: 3,
  },
  userName: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    flexWrap: 'nowrap',
    marginBottom: 16,
    //borderWidth: 3,
  },
  stats: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  connectionImage: {
    borderRadius: 50,
    backgroundColor: 'rgba(3, 3, 255, 1)',
    width: 40,
    height: 40,
  },
  connectionText: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 11,
  },
  connectionContainer2: {
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  connectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    marginTop: '5%',
  },
  profileContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 3,
    alignItems: 'center',
    //borderWidth: 1,
  },
  containerUpper: {
    flex: 0.9,
    marginBottom: 39,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    //borderWidth: 5 ,
    padding: '4%',
  },
  containerLower: {
    flex: 2,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
});

export default function Profile({ navigation }, props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/images/86373.jpg')}>
        <Heading title="Profile" />
        <View style={styles.containerUpper}>

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <ImageHolder
                img={require('../assets/images/tyler.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.profileContainer}>
            <Text style={styles.userName}>Tyler Durden</Text>
            <View style={styles.statsContainer}>
              <Text style={styles.stats}>Likes{'\n'}5455</Text>
              <Text style={styles.stats}>Following{'\n'}456</Text>
            </View>
            <View style={styles.connectionContainer}>
              <View style={styles.connectionContainer2}>
                <Image
                  style={styles.connectionImage}
                  source={require('../assets/images/github.png')}
                />
                <Text style={styles.connectionText}>Github</Text>
              </View>
              <View style={styles.connectionContainer2}>
                <Image
                  style={styles.connectionImage}
                  source={require('../assets/images/Linkedin.png')}
                />
                <Text style={styles.connectionText}>LinkedIn</Text>
              </View>
              <View style={styles.connectionContainer2}>
                <Image
                  style={styles.connectionImage}
                  source={require('../assets/images/CodeyWhiteBG.png')}
                />
                <Text style={styles.connectionText}>Codey </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
