import React, {Fragment} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import LanguageSmallCard from '../Components/LanguageSmallCard';

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    flex: 1,
  },
  mainHeaderContainer: {
    height: '40%',
    borderWidth: 2,
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
    backgroundColor: 'rgba(237, 237, 24, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.5,
    width: '100%',
    borderWidth: 8,
  },
  cards: {
    flex: 1,
    borderWidth: 4,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 0, 67, 1)',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
});

export default function LanguagePost() {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground style={styles.image}>
            <View style={styles.mainHeaderContainer}>
              <Text style={styles.title}>Javascript</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.cards}>
          <LanguageSmallCard
            click={() => {}}
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
            click={() => {}}
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
            click={() => {}}
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
    </Fragment>
  );
}
