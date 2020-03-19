import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CategoryCard from './CategoryCard';
import Header from './Header';
import Heading from './Heading';
import SearchBar from './SearchBar';
import BottomNavBar from './BottomNavBar';
import TopBarLowLevel from './TopBarLowLevel';

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
            <TopBarLowLevel />

            {/*For Each Rows */}
            <ScrollView />
            {/* End */}
          </View>
        </View>
      </View>
    </>
  );
}
