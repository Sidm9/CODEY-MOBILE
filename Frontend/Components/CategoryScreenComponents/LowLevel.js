import React from 'react';
import {View, StyleSheet} from 'react-native';
import CategoryCard from './CategoryCard';
import SearchBar from '../SearchBar';

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
    // borderWidth: 4,
    borderColor: 'black',
    flexGrow: 1,
  },
});

export default function LowLevel() {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.CategorySectionContainer}>
          <View style={styles.categoryCardMainContainer}>
            <SearchBar title="Search Languages.." />
            {/*For Each Rows */}

            <View style={styles.categoryCardGridContainer}>
              <CategoryCard
                languageName="C"
                languageIcon={require('../../assets/images/C.png')}
              />
              <CategoryCard
                languageName="CPP"
                languageIcon={require('../../assets/images/C+.png')}
              />
            </View>

            {/* End */}
          </View>
        </View>
      </View>
    </>
  );
}
