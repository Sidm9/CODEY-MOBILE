import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../Components/Card';
import Header from '../Components/Navbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default function Posts({navigation}, props) {
  return (
    <>
      <View style={styles.container}>
        <Header title="Feed" goBack={() => navigation.navigate('Login')} />
        <ScrollView>
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
          <Card open={() => navigation.navigate('Article')} />
        </ScrollView>
      </View>
    </>
  );
}
