import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '99%',
    borderWidth: 5,
    justifyContent: 'space-around',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: '25%',
    borderRadius: 4,
    borderColor: 'rgba(25, 25, 230, 1)',
  },
  imageContainer: {
    borderWidth: 4,
    height: '80%',
    margin: 2,
    flex: 0.4,
  },
  detailsContainer: {
    borderWidth: 5,
    flex: 1,
    height: '100%',
    margin: 2,
    justifyContent: 'space-around',
  },
  headingContainer: {
    width: '100%',
    flex: 1,
    height: '10%',
    flexDirection: 'row',
    alignItems: 'stretch',
    alignSelf: 'center',
    flexGrow: 1,
  },
  heading: {
    fontSize: 15,
    flex: 1.1,
    fontFamily : 'Montserrat-Bold'
  },
  timeStamp: {
    fontSize: 12,
    textAlignVertical: 'bottom',
    padding: 1,
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  content: {
    fontSize: 13,
    margin: 2,
  },
});

export default function LanguageSmallCard() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer} />
        <View style={styles.detailsContainer}>
          <View style={styles.headingContainer}>
            <Text numberOfLines={2} style={styles.heading}>
              Header could be large beause it is biig oweijtoeri
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.timeStamp}>
            22 Match 2020
          </Text>
          <View style={styles.contentContainer}>
            <Text selectable={false} numberOfLines={2} style={styles.content}>
              Content is this that this w Content is this that this will
              ........
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
