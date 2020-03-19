import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CategoryCard from '../Components/CategoryCard';
import Header from '../Components/Header';
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

export default function LowLevel() {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.CategorySectionContainer}>

          <View style={styles.categoryCardMainContainer}>
            <SearchBar title = "Search Languages.." />
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
            </ScrollView>
            {/* End */}
          </View>
        </View>
      </View>
    </>
  );
}
