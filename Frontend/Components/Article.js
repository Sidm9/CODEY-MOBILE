/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disableno-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, ImageBackground, View, StyleSheet, Image } from 'react-native';
import bg from '../assets/images/123.jpg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from './Navbar.js';
import ShareIconsGrid from './ShareIconsGrid';
import TextHere from './--TextHere---';
import Heading from '../Components/Heading';
import ImageHolder from './ImageHolder';
import Easein from '../Animations/Easein';
import FadeInView from '../Animations/FadeIn';
const styles = StyleSheet.create({
  Title_Heading: {
    fontSize: 30,
    marginRight: 25,
    marginLeft: 25,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "justify",
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  imageB: {
    flex: 1,
    width: '100%',
    height: null,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    resizeMode: 'contain',
  },
  headerStyling: {
    borderColor: 'green',
    alignSelf: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(52, 52, 52, 0.008)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  byLine: {
    fontSize: 20,
    marginBottom: 10,
    margin: 10,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  minuteDuration: {
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  byCon: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  tags: {
    margin: 5,
    fontSize: 12,
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  tagContainer: {
    borderRadius: 50,
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    overflow: 'hidden',
  },
  tagContainer2: {
    borderRadius: 50,
    backgroundColor: 'red',
    marginLeft: 10,
  },
  logo: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  line: {
    width: '60%',
    borderTopWidth: 1,
    margin: 10,
    alignContent: "space-between",
    alignSelf: 'center',
  },
  byLineAndMinuteReadContainer: {
    zIndex: -100,
    flexDirection: 'row',
    height: null,
    marginTop: 5,
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  articleContentContainer: {
    flex: 1,
    zIndex: -100,
    padding: 15,

    justifyContent: 'flex-start',
  },
  headerContainer: {
    flex: 1,
    alignSelf: 'baseline',
    zIndex: -10000,
  },
  container: {
    flex: 1,
  },
  PostContentContainer: {
    flex: 1,
    alignSelf: 'center'
  },
  PostContent: {
    paddingRight: 25,
    paddingLeft: 25,
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: "justify",
    color: 'rgba(0,0,0,0.8)',
  },
});

export default function Article({ navigation }) {
  const TwitterDarkBG = require('../assets/icons/TwitterWhiteBG.png');
  const [darkmode, setdarkmode] = useState(false);
  const colors = ['red', 'green', 'blue'];
  function darkmodeSetter() {
    setdarkmode(!darkmode);
    console.log(darkmode.toString());
  }
  return (
    <ScrollView>
      <Easein style={styles.container}>
        {/*  <Heading title = "Article"/>*/}
        <FadeInView style={styles.imageContainer}>
          <ImageBackground
            source={bg}
            style={styles.imageB} />
        </FadeInView>
        <Text style={styles.Title_Heading}>
          White Text with black outline works with every background
      </Text>
        <Easein style={styles.line} />
        <ShareIconsGrid />
        <Easein style={styles.articleContentContainer}>
          <Easein style={styles.byCon}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Image style={styles.logo} source={require('../assets/images/tyler.jpg')} />
            </TouchableOpacity>
            <Text style={styles.byLine}>Tyler Durdern</Text>
            <Image source={require('../assets/icons/clockWhiteBG.png')} style={{ width: 20, height: 20, marginTop: 5 }} />
            <Text style={styles.minuteDuration}>5 Minute Read</Text>
          </Easein>
          <Easein><Text style={{ alignSelf: "center", fontFamily: 'Montserrat-Medium' }}> Mar 26 2020 23:05:30</Text></Easein>
          <Easein style={styles.byLineAndMinuteReadContainer}>
            <Easein style={styles.tagContainer}>
              <Text style={styles.tags}>what </Text>
            </Easein>
            <Easein style={styles.tagContainer}>
              <Text style={styles.tags}>is this </Text>
            </Easein>
            <Easein style={styles.tagContainer}>
              <Text style={styles.tags}>reality</Text>
            </Easein>
          </Easein>
        </Easein>
      </Easein>
      <Easein style={styles.PostContentContainer}>
        <Text style={styles.PostContent}>
          Cognitive load refers here to the amount of brain power required to
          use the app. The human brain has a limited amount of processing power,
          and when an app provides too much information at once, it might
          overwhelm the user and make them abandon the task.
          {'\n'} {'\n'}
          Generally, this is what you want. But it's possible that in some
          circumstances that you want to customize the back button more than you
          can through the options mentioned above, in which case you can set the
          headerLeft option to a React Element that will be rendered, just as we
          did with headerRight. Alternatively, the headerLeft option also
          accepts a React Component, which can be used, for example, for
          overriding the onPress behavior of the back button. Read more about
          this in the api reference.
        </Text>
      </Easein>
    </ScrollView>
  );
}
