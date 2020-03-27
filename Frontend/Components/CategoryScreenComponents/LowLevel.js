import React from 'react';
import {View, StyleSheet} from 'react-native';
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

export default function LowLevel() {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.categoryCardMainContainer}>
          <SearchBar title="Search Languages.." />
          {/*For Each Rows */}
          <View style={styles.categoryCardGridContainer}>
            <CategoryCard
              languageName="C"
              languageIcon={require('../../assets/images/C.png')}
            />
            <CategoryCard
              languageName="C++"
              languageIcon={require('../../assets/images/C++.png')}
            />
          
          </View>

          <View style={styles.categoryCardGridContainer}>
          <CategoryCard
            languageName="C"
            languageIcon={require('../../assets/images/C.png')}
          />
        
         
        
        </View>
        </View>

        
      </View>
    </>
  );
}
