import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CategoryCard from './CategoryCard';
import SearchBar from '../SearchBar';

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

export default function HighLevel() {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.categoryCardMainContainer}>
          <SearchBar title="Search Languages.." />
          {/*For Each Rows */}
          <ScrollView>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="Java"
                languageIcon={require('../../assets/images/Java.png')}
              />
              <CategoryCard
                languageName="Javascripttttttt"
                languageIcon={require('../../assets/images/JS.png')}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="Golang"
                languageIcon={require('../../assets/images/Golang.png')}
              />
            </View>
          </ScrollView>
          {/* End */}
        </View>
      </View>
    </>
  );
}
