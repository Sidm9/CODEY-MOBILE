import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
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
    marginTop: 1,
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
