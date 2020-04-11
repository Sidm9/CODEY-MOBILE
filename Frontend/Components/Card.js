import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '100%',
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
    fontFamily: 'Montserrat-Medium',
  },
  cardNavbar: {
    backgroundColor: 'rgba(224, 233, 240, 1)',
    width: '100%',
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
    width: '90%',
    position: 'relative',
    borderRadius: 20,
    marginTop: '5%',
    marginBottom: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.86,
    shadowRadius: 1.68,
    elevation: 8,
    borderWidth: 2,
    flex: 1,
  },
});

export default function Card(props, {navigation}) {

  // const content =
  //   "Cognitive load refers here to the amount of brain power required to use the app. The human brain has a limited amount of processing power, and when an app provides too much information at once, it might overwhelm the user and make them abandon the task. Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can set the headerLeft option to a React Element that will be rendered, just as we did with headerRight. Alternatively, the headerLeft option also accepts a React Component, which can be used, for example, for overriding the onPress behavior of the back button. Read more about this in the api reference.";

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
        <TouchableOpacity onPress={props.open}>
          <Image
            style={styles.image}
            source={require('../assets/images/qqwe.jpg')}
          />
          <Text style={styles.heading}>{props.heading}</Text>
          <View style={styles.byLineContainer}>
            <Image
              style={styles.imageWhoHasPostedThisPostHeadShot}
              source={require('../assets/images/tyler.jpg')}
            />
            <Text style={styles.subHeading}>Tyler Durden 5 Minute Read</Text>
          </View>
          <Text numberOfLines={10} style={styles.content}>
            {props.contenthandler}
          </Text>

          <View style={styles.cardNavbar}>
            <TouchableOpacity style={styles.like} onPress={likeToggle}>
              <Image source={require('../assets/icons/LikeLight.png')} />
              <Text style={styles.countNumber}> {toggleStateLike} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.comment}
              onPress={props.commentClick}>
              <Image source={require('../assets/icons/commentDark.png')} />
              <Text style={styles.countNumber}> {toggleStateComment} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.share} onPress={shareToggle}>
              <Image source={require('../assets/icons/shareDark.png')} />
              <Text style={styles.countNumber}> {toggleStateShare} </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
