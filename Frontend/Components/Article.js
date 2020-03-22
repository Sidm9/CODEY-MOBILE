import React, {Fragment} from 'react';
import {Text, ImageBackground, View, StyleSheet, Image} from 'react-native';
import bg from '../assets/images/qqwe.jpg';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Header from './Header.js';

const styles = StyleSheet.create({
  Title_Heading: {
    fontSize: 30,
    margin: 20,
    zIndex: 100,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    textShadowColor: '#000000',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
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
    borderWidth: 3,
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
    fontSize: 15,
    marginBottom: 10,
    margin: 5,
    fontFamily: 'Montserrat-Medium',
    zIndex: 100,
  },
  minuteDuration: {
    marginBottom: 10,
    margin: 5,
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  byLineMinuteRead: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: -1000,
    marginTop: 10,
    marginLeft: 10,
  },
  tags: {
    margin: 5,
    fontSize: 12,
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    // color: 'rgba(248, 248, 248, 1)',
  },
  tagContainer: {
    borderRadius: 50,
    backgroundColor: 'blue',
    marginLeft: 10,
  },
  tagContainer2: {
    borderRadius: 50,
    backgroundColor: 'red',
    marginLeft: 10,
  },
  shareButton: {
    marginLeft: 130,
    flexWrap: 'wrap',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  byLineAndMinuteReadContainer: {
    width: '100%',
    zIndex: -100,
    flexDirection: 'row',
    height: 50,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  articleContentContainer: {
    flex: 1,
    zIndex: -100,
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
  s8a286441: {
    flex: 1,
  },
  s001b12f2: {
    margin: 15,
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
});

export default function Article(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={bg}
            style={styles.imageB}
            // eslint-disable-next-line react-native/no-inline-styles
            imageStyle={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              flex: 1,
            }}>
            <Text style={styles.Title_Heading}>
              White Text with black background works with every background
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.articleContentContainer}>
          <View style={styles.byLineMinuteRead}>
            <Text style={styles.byLine}>Hokoona Matata</Text>
            <Text style={styles.minuteDuration}>5 Minute Read</Text>
          </View>
          <View style={styles.byLineAndMinuteReadContainer}>
            <View style={styles.tagContainer}>
              <Text style={styles.tags}>Coding</Text>
            </View>
            <View style={styles.tagContainer2}>
              <Text style={styles.tags}>Codey Rocks</Text>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <Image source={require('../assets/icons/shareDark.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.s8a286441}>
        <Text style={styles.s001b12f2}>
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
      </View>
    </ScrollView>
  );
}
