import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import TylerHeadShot from '../assets/images/tyler.jpg';
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
    backgroundColor: 'rgba(173, 209, 232, 1)',
    flexDirection: 'column',
  },
  categoryTitleStyle: {
    width: 180,
    marginLeft: 60,
    marginTop: 50,
    fontSize: 30,
    height: 50,
    fontFamily: 'Montserrat-Bold',
  },
  CategorySectionContainer: {
    backgroundColor: 'rgba(220, 12, 12, 1)',
    flex: 1,
    flexDirection: 'column',
  },
  MainContainer: {
    backgroundColor: 'rgba(30, 27, 27, 1)',
    flex: 1,
  },
});

export default function Categories(props) {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.CategorySectionContainer}>
          <Text style={styles.categoryTitleStyle}>Categories</Text>
          <View style={styles.categoryCardMainContainer}>
            {/*For Each Rows */}
            <View style={styles.categoryCardGridContainer}>
              <CategoryCard languageName="C (GCC)" />
              <CategoryCard languageName="CPP" />
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
            {/* End */}
          </View>
        </View>
      </View>
      {/* <ScrollView style={styles.se147d901} /> */}
    </>
  );
}
