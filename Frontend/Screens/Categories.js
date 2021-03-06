import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CategoryCard from '../Components/CategoryScreenComponents/CategoryCard';
import Header from '../Components/Navbar';
import Heading from '../Components/Heading';
import SearchBar from '../Components/SearchBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
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
       {/**    <Header title="Categories" />  */}
          <View style={styles.categoryCardMainContainer}>
            <SearchBar />
            {/*For Each Rows */}
            <ScrollView>
              <Heading title="Low Level " />
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
              <Heading title="High Level" />
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
              <Heading title="Hybrid" />

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
            </ScrollView>
            {/* End */}
          </View>
        </View>
      </View>
    </>
  );
}
