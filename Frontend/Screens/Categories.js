import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CategoryCard from '../Components/CategoryCard';
const styles = StyleSheet.create({
  categoryCardGridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  se147d901: {
    flex: 1,
  },
  categoryCardMainContainer: {
    flex: 2,
    //backgroundColor: 'rgba(173, 209, 232, 1)',
    flexDirection: 'column',
  },
  categoryHeaderStyle: {
    width: 250,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 40,
    height: 60,
    fontFamily: 'Montserrat-Bold',
  },
  categoryBackIconHeaderStyle: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 32,
  },
  categoryNavbarContainer: {
    flexDirection: 'row',
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
          <View style={styles.categoryNavbarContainer}>
            <TouchableOpacity style={styles.categoryBackIconHeaderStyle}>
              <Image
                source={require('../assets/icons/baseline_arrow_back_ios_black_18dp.png')}
              />
            </TouchableOpacity>
            <Text style={styles.categoryHeaderStyle}>Categories</Text>
          </View>
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
      {/* <ScrollView style={styles.se147d901} /> */}
    </>
  );
}
