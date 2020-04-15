import React from 'react';
import Heading from '../Components/Heading';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Button from '../Components/Button';
import PlaceHolders from '../Components/PlaceHolders';
import Easein from '../Animations/Easein';
import FadeInView from '../Animations/FadeIn';
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
      <Easein style={styles.container}>
        <Heading title=" New Post" />
        <PlaceHolders placeholder={'Title'} />
        <PlaceHolders placeholder={'Enter Content'} />
        <FadeInView style={styles.image_container}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/gallery.png')}
              style={styles.image}
            />
            <Text style={styles.image_text}> Add Image </Text>
          </TouchableOpacity>
        </FadeInView>
        <Button text="Post !" />
      </Easein>
    </>
  );
}
