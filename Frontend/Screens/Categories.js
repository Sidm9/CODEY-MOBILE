import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CategoryCard from '../Components/CategoryCard';
import Header from '../Components/Header';
const styles = StyleSheet.create({
  categoryCardGridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  categoryCardMainContainer: {
    flex: 2,
    flexDirection: 'column',
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
          <Header title="Categories" />
          <View style={styles.categoryCardMainContainer}>
            {/*For Each Rows */}
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard languageName="C (GCC)" />
              <CategoryCard
                languageName="CPP"
                imageUrl={'../assets/images/Java.png'}
              />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard languageName="Java" />
              <CategoryCard languageName="Javascript" />
            </View>

            <View style={styles.categoryCardGridContainer}>
              <CategoryCard languageName="Flutter" />
              <CategoryCard languageName="React" />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard languageName="Golang" />
              <CategoryCard languageName="Python" />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard languageName="C (GCC)" />
              <CategoryCard languageName="CPP" />
            </View>
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard languageName="Java" />
              <CategoryCard languageName="Javascript" />
            </View>
            {/* End */}
          </View>
        </View>
      </View>
    </>
  );
}
