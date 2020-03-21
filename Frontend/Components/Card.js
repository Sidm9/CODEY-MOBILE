import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 380,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 190,
  },
  countNumber: {
    margin: 1,
    marginTop: 1,
  },
  heading: {
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
  imageWhoHasPostedThisPostHeadShot: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 50,
  },
  subHeading: {
    marginLeft: 15,
    marginTop: 20,
    position: 'relative',
    marginRight: 130,
    fontFamily: 'Montserrat-SemiBold',
  },
  content: {
    flexWrap: 'wrap',
    margin: 15,
    fontFamily: 'Montserrat-Regular',
  },
  cardNavbar: {
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
  like: {
    paddingRight: 10,
    paddingLeft: 15,
    flexDirection: 'row',
  },
  comment: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  share: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },

  container: {
    backgroundColor: 'rgba(237, 240, 243, 1)',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    width: 380,
    position: 'relative',
    borderRadius: 20,
    marginTop: 15,
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
  const [toggleStateLike, settoggleStateLike] = useState(0);
  function likeToggle() {
    settoggleStateLike(toggleStateLike === 0 ? 1 : 0);
    return toggleStateLike;
  }
  const [toggleStateComment, settoggleStateComment] = useState(0);
  function commentToggle() {
    settoggleStateComment(toggleStateComment === 0 ? 1 : 0);
    return toggleStateComment;
  }

  const [toggleStateShare, settoggleStateShare] = useState(0);
  function shareToggle() {
    settoggleStateShare(toggleStateShare === 0 ? 1 : 0);
    return toggleStateShare;
  }

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/qqwe.jpg')}
        />
        <Text style={styles.heading}>
          I am the one, don't weigh a ton Don't need a gun to get respect up on
          the street !!!
        </Text>
        <View style={styles.byLineContainer}>
          <Image
            style={styles.imageWhoHasPostedThisPostHeadShot}
            source={require('../assets/images/tyler.jpg')}
          />
          <Text style={styles.subHeading}>Tyler Durden 5 Minute Read</Text>
        </View>
        <Text numberOfLines={10} style={styles.content}>
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
        <View style={styles.cardNavbar}>
          <TouchableOpacity style={styles.like} onPress={likeToggle}>
            <Image source={require('../assets/icons/LikeLight.png')} />
            <Text style={styles.countNumber}> {toggleStateLike} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.comment} onPress={commentToggle} >
            <Image source={require('../assets/icons/commentDark.png')} />
            <Text style={styles.countNumber}> {toggleStateComment} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.share} onPress={shareToggle}>
            <Image source={require('../assets/icons/shareDark.png')} />
            <Text style={styles.countNumber}> {toggleStateShare} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
