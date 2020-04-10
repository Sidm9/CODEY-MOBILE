import React from 'react';
import Heading from '../Components/Heading';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Button from '../Components/Button';
import PlaceHolders from '../Components/PlaceHolders';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image_container: {
    alignItems: 'center',
  },
  image_text: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  image: {
    left: 11,
  }
});

export default function NewPost() {
  return (
    <>
      <View style={styles.container}>
        <Heading title=" New Post" />
        <PlaceHolders placeholder={'Title'} />
        <PlaceHolders placeholder={'Enter Content'} />
        <View style={styles.image_container}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/gallery.png')}
              style={styles.image}
            />
            <Text style={styles.image_text}> Add Image </Text>
          </TouchableOpacity>
        </View>
        <Button text="Post !" />
      </View>
    </>
  );
}
