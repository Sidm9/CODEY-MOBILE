import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LanguageSmallCard from '../Components/LanguageSmallCard';
import SettingsHeader from './Settings/SettingsHeader';

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    letterSpacing: 5,
    flex: 1,
  },
  mainHeaderContainer: {
    height: '40%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.5,
    width: '100%',
  },
  cards: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
});

export default function LanguagePost() {
  return (
    <>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={require('../assets/images/JS.jpg')}>
            <View style={styles.mainHeaderContainer}>
              <Text style={styles.title}>Javascript</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.cards}>
          <SettingsHeader title=" Latest Posts " subtitle="Reccuring Posts" />
          <LanguageSmallCard
            click={() => { }}
            image={require('../assets/images/123.jpg')}
            title={
              'this is a heading it could be large or small but very long heading will introduce .... '
            }
            time={'29 March 2020'}
            content={
              'Now this is very the magic happens see this post will open article.js  and there the contet will be shown there'
            }
          />
          <LanguageSmallCard
            click={() => { }}
            image={require('../assets/images/123.jpg')}
            title={
              'this is a heading it could be large or small but very long heading will introduce .... '
            }
            time={'29 March 2020'}
            content={
              'Now this is very the magic happens see this post will open article.js  and there the contet will be shown there'
            }
          />
          <LanguageSmallCard
            click={() => { }}
            image={require('../assets/images/123.jpg')}
            title={
              'this is a heading it could be large or small but very long heading will introduce .... '
            }
            time={'29 March 2020'}
            content={
              'Now this is very the magic happens see this post will open article.js  and there the contet will be shown there'
            }
          />
        </View>

      </View>

    </>
  );
}
