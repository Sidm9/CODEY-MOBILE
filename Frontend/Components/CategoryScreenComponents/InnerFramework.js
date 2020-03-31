import React from 'react';
import {View, StyleSheet} from 'react-native';
import CategoryCard from './CategoryCard';
import SearchBar from '../SearchBar';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  categoryCardGridContainer: {
    flexDirection: 'row',
    //flex: 1,
    display: 'flex',

    //justifyContent: 'space-evenly',
    //flexWrap: 'initial',
    alignContent: 'flex-start',
  },
  categoryCardMainContainer: {
    flex: 1,
    flexDirection: 'column',
    //marginTop: 20,
  },
  MainContainer: {
    flex: 1,
    borderColor: 'black',
    flexDirection: 'column',
    flexGrow: 1,
  },
});

export default function LowLevel() {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.categoryCardMainContainer}>
          <SearchBar title="Search Languages.." />
          <ScrollView>
            {/*For Each Rows */}
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="React"
                languageIcon={require('../../assets/images/jsx.png')}
              />
              <CategoryCard
                languageName="Vue"
                languageIcon={require('../../assets/images/Vue.png')}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="React Native"
                languageIcon={require('../../assets/images/react-native.png')}
              />
              <CategoryCard
                languageName="Flask"
                languageIcon={require('../../assets/images/flask.png')}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="Flutter"
                languageIcon={require('../../assets/images/flutter.png')}
              />
              <CategoryCard
                languageName="Angular JS"
                languageIcon={require('../../assets/images/angular.png')}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="Next JS"
                languageIcon={require('../../assets/images/next.png')}
              />
              <CategoryCard
                languageName="Nuxt JS"
                languageIcon={require('../../assets/images/nuxt.png')}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="Android Studio"
                languageIcon={require('../../assets/images/android.png')}
              />
              <CategoryCard
                languageName="X CODE"
                languageIcon={require('../../assets/images/xcode.png')}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="Electron"
                languageIcon={require('../../assets/images/electron.png')}
              />
              <CategoryCard
                languageName="Peewee"
                languageIcon={require('../../assets/images/peewee.png')}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="SQL Alchemy"
                languageIcon={require('../../assets/images/SQLA.jpg')}
              />
              <CategoryCard
                languageName="Marshmallow"
                languageIcon={require('../../assets/images/marshmallow.png')}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="Django"
                languageIcon={require('../../assets/images/django.png')}
              />
              <CategoryCard
                languageName="QT Creator "
                languageIcon={require('../../assets/images/qtcreator.png')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
