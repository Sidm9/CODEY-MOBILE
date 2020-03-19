import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CategoryCard from '../Components/CategoryCard';
import Header from '../Components/Header';
import Heading from '../Components/Heading';
import SearchBar from '../Components/SearchBar';

const styles = StyleSheet.create({
  categoryCardGridContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryCardMainContainer: {
    flex: 2,
    flexDirection: 'column',
    marginTop: 20,
  },
  CategorySectionContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  MainContainer: {
    flex: 1,
  },
});

export default function Categories() {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.CategorySectionContainer}>
          <View style={styles.categoryCardMainContainer}>
            <SearchBar />
            {/*For Each Rows */}
            <ScrollView>
              <View style={styles.categoryCardGridContainer}>
                <CategoryCard
                  languageName="C"
                  languageIcon={require('../assets/images/C.png')}
                />
                <CategoryCard
                  languageName="CPP"
                  languageIcon={require('../assets/images/C+.png')}
                />
              </View>
              <View style={styles.categoryCardGridContainer}>
                <CategoryCard
                  languageName="Java"
                  languageIcon={require('../assets/images/Java.png')}
                />
                <CategoryCard
                  languageName="Javascript"
                  languageIcon={require('../assets/images/JS.png')}
                />
              </View>
              <View style={styles.categoryCardGridContainer}>
                <CategoryCard
                  languageName="Golang"
                  languageIcon={require('../assets/images/Golang.png')}
                />
                <CategoryCard
                  languageName="Python"
                  languageIcon={require('../assets/images/Python.png')}
                />
              </View>
              <View style={styles.categoryCardGridContainer}>
                <CategoryCard
                  languageName="C#"
                  languageIcon={require('../assets/images/CS.png')}
                />
                <CategoryCard
                  languageName="Vue"
                  languageIcon={require('../assets/images/Vue.png')}
                />
              </View>
              <View style={styles.categoryCardGridContainer}>
              <CategoryCard
              languageName="Vue"
              languageIcon={require('../assets/images/Vue.png')}
            />
            <Text>                           I just use space </Text>
              </View>
            </ScrollView>
            {/* End */}
          </View>
        </View>
      </View>
    </>
  );
}
