import React from 'react';
import {Image, View, Text, StyleSheet, ImageBackground} from 'react-native';
import ImageHolder from '../Components/ImageHolder';
import Header from '../Components/Header';
import Card from '../Components/Card';
import SearchBar from '../Components/SearchBar';
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  userName: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    flexWrap: 'nowrap',
    marginBottom: 16,
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
    width: 45,
    height: 45,
  },
  connectionText: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 11,
  },
  connectionContainer2: {
    borderRadius: 50,
    height: 40,
    width: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  s9bdf4940: {
    textAlign: 'center',
  },
  s37d5ba06: {
    textAlign: 'center',
  },
  connectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  profileContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    flex: 2,
    alignItems: 'center',
    alignSelf: 'center',
    height: 125,
    marginBottom: 25,
  },
  containerUpper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'auto',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerLower: {
    flex: 2,
  },
  container: {
    flex: 1,
  },
});

export default function Profile(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/86373.jpg')}>
      <Header title="Profile" />
      <View style={styles.containerUpper}>
        <View style={styles.imageContainer}>
          <ImageHolder displayPic={require('../assets/images/tyler.jpg')} />
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
      <View style={styles.containerLower}>
        <SearchBar />
      </View>
    </ImageBackground>
  );
}
