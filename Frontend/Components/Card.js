/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Text} from 'react-native';

export default function card() {
  return (

    <View style={styles.container}>

      <Card style={styles.neorphboxStyling}>
        <Card.Cover style={styles.ImageCoverStyling} source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png' }} />
        <Card.Content>
          <Title style={styles.cardTitle}>Main Title</Title>
          <Paragraph style={styles.cardSubHeading}> By Alex Mercer - 9 March 2020 </Paragraph>
          <Paragraph style={styles.cardContent}>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
          </Paragraph>
          <Card.Actions>
            <Button /*icon  =  {require('../assets/icons/thumb_up-24pxWHITE.svg')}*/>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    padding: 15,
    borderWidth: 0,

  },
  cardTitle: {
    fontFamily: 'Montserrat-Bold',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 20,
  },
  cardSubHeading: {
    fontFamily: 'Montserrat-SemiBold',
    paddingRight: 10,
    paddingLeft: 5,
  },
  cardContent: {
    fontFamily: 'Montserrat-Regular',
    padding: 10,
  },
  ImageCoverStyling: {

    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  neorphboxStyling: {
    shadowRadius: 2,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    backgroundColor: '#e6edf2',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,

    elevation: 9,
  },
});
