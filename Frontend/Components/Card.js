/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { commentData } from '../Database/DbComment';
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
    marginTop: 15,
    position: 'relative',
    marginRight: 130,
    fontFamily: 'Montserrat-SemiBold',
  },
  timeAndMinuteTime: {
    marginLeft: 15,
    marginTop: 1,
    fontSize: 10,
    position: 'relative',
    marginRight: '1%',
    fontFamily: 'Montserrat-SemiBold',
  },
  content: {
    flexWrap: 'wrap',
    margin: 15,
    fontFamily: 'Montserrat-Medium',
  },
  timeAndMinuteTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  commentsBar: {
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: '2%',
    flexDirection: 'column',
    height: null,
    justifyContent: 'flex-start',
  },
  commentUsername: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    marginHorizontal: '1%',
  },
  commentHeader: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    marginVertical : '1%',
    marginHorizontal: '2%',
  },
  commentFooter: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginVertical : '1%',
    marginHorizontal: '2%',
  },
  commentText: {
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginHorizontal: '1%',
  },
  like: {
    paddingRight: 10,
    paddingLeft: 15,
    flexDirection: 'row',
  },
  commentButton: {
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
    width: '95%',
    position: 'relative',
    borderRadius: 20,
    marginTop: '2%',
    marginBottom: '2%',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.86,
    shadowRadius: 1.68,
    elevation: 8,
    flex: 1,
  },
});

export default function Card(props, { navigation }) {
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
  //All THE PROPS OF THIS COMPONENT WILL COME FROM POST.JS
  const Temp = commentData;
  function First_5_comments_handler({ usernames, comment }) {
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ margin: '1%' }}>
          <Text style={styles.commentUsername}>{usernames}</Text>
          <Text numberOfLines={1} style={styles.commentText}>{comment}</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.open}>
          <Image style={styles.image} source={{ uri: props.imagesss }} />
          <Text style={styles.heading}>{props.heading}</Text>
          <View style={styles.byLineContainer}>
            <Image
              style={styles.imageWhoHasPostedThisPostHeadShot}
              source={require('../assets/images/tyler.jpg')}
            />
            <View>
              <Text style={styles.subHeading}>{props.auther}</Text>
              <View style={styles.timeAndMinuteTimeContainer}>
                <Text style={styles.timeAndMinuteTime}>{props.time}</Text>
                <Text style={styles.timeAndMinuteTime}>
                  {props.timetoread} Read
                </Text>
              </View>
            </View>
          </View>
          <Text numberOfLines={10} style={styles.content}>
            {props.post}
          </Text>

          <View style={styles.cardNavbar}>
            <TouchableOpacity style={styles.like} onPress={likeToggle}>
              <Image source={require('../assets/icons/LikeLight.png')} />
              <Text style={styles.countNumber}> {toggleStateLike} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.commentButton}
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
        <View style={styles.commentsBar}>
        <Text style={styles.commentHeader}>Comments</Text>
        <FlatList data={Temp}
        renderItem={({ item }) => (
          <First_5_comments_handler
            usernames={item.usernames}
            comment={item.comment} />
        )} />
        <Text style={styles.commentFooter}>Load More Comments ...</Text>
        </View>
    </View>
    </>
  );
}
