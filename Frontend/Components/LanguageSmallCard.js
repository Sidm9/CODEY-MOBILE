import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '95%',
    borderWidth: 1,
    justifyContent: 'space-around',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: '25%',
    borderRadius: 12,
    borderColor: 'black',
  },
  imageContainer: {
    height: '80%',
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4,
  },
  image: {
    width: '95%',
    height: '95%',
    borderRadius: 12,
  },
  detailsContainer: {
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
    margin: 4,
    flex: 1,
    fontFamily: 'Montserrat-Bold',
  },
  timeStamp: {
    fontSize: 12,
    margin: 4,
    textAlignVertical: 'bottom',
    padding: 1,
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'stretch',

    alignItems: 'stretch',
  },
  content: {
    fontSize: 13,
    margin: 4,
  },
});

export default function LanguageSmallCard(props) {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={props.click}>
        <View style={styles.imageContainer}>
          <Image source={props.image} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.headingContainer}>
            <Text numberOfLines={2} style={styles.heading}>
              {props.title}
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.timeStamp}>
            {props.time}
          </Text>
          <View style={styles.contentContainer}>
            <Text selectable={false} numberOfLines={2} style={styles.content}>
              {props.content}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
