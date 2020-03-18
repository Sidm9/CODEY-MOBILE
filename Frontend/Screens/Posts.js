import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../Components/Card';
import Header from '../Components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default function Posts({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Header title="Feed" />
        <ScrollView>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </>
  );
}
