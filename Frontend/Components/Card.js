import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  imageStyling: {
    width: 380,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 190,
  },
  headingStyling: {
    textAlignVertical: 'auto',
    textAlign: 'left',
    fontSize: 22,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: 'normal',
    fontFamily: 'Montserrat-Bold',
  },
  byLineContainer: {
    flexDirection: 'row',
  },
  imageWhoHasPostedThisPostHeadShotStyling: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 50,
  },
  subHeadingStyling: {
    marginLeft: 15,
    marginTop: 20,
    position: 'relative',
    marginRight: 130,
    fontFamily: 'Montserrat-SemiBold',
  },
  contentStyling: {
    flexWrap: 'wrap',
    margin: 15,
    fontFamily: 'Montserrat-Regular',
  },
  cardNavbarStyling: {
    backgroundColor: 'rgba(224, 233, 240, 1)',
    width: 380,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    height: 35,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  likeStyling: {
    paddingRight: 10,
    paddingLeft: 20,
  },
  commentStyling: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  shareStyling: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  container: {
    backgroundColor: 'rgba(237, 240, 243, 1)',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    width: 380,
    position: 'relative',
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 15,
    marginRight: 40,
    marginLeft: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.86,
    shadowRadius: 6.68,
    elevation: 11,
  },
});

export default function Card(props) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.imageStyling}
          source={require('../assets/images/qqwe.jpg')}
        />
        <Text style={styles.headingStyling}>
          I am the one, don't weigh a ton Don't need a gun to get respect up on
          the street !!!
        </Text>
        <View style={styles.byLineContainer}>
          <Image
            style={styles.imageWhoHasPostedThisPostHeadShotStyling}
            source={require('../assets/images/tyler.jpg')}
          />
          <Text style={styles.subHeadingStyling}>
            Tyler Durden 5 Minute Read
          </Text>
        </View>
        <Text numberOfLines={10} style={styles.contentStyling}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a t It has survived not only five centuries, but
          also the leap into theke a t It has survived not only five centuries,
          but make a t It has survived not only five centuries, but also the
          leap into theke a t It has survived not only five centuries, but also
          the leap into theIt has survived not only five centuries, but also the
          leap into theke
        </Text>
        <View style={styles.cardNavbarStyling}>
          <TouchableOpacity style={styles.likeStyling}>
            <Image source={require('../assets/icons/LikeLight.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.commentStyling}>
            <Image source={require('../assets/icons/commentDark.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareStyling}>
            <Image source={require('../assets/icons/shareDark.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
