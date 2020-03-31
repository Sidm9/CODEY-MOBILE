import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.15,
    alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: '100%',
    height: null,
  },
  username: {
    flex: 0.5,
    padding: 5,
    fontSize: 20,
    height: null,
    fontFamily: 'Montserrat-Medium',
  },
  comment: {
    flex: 1,
    padding: 5,
    width: '100%',
    height: null,
    flexWrap: 'wrap',
    fontFamily: 'Montserrat-Medium',
    // borderWidth :1,
  },
  username_container: {
    // borderWidth: 1,
    flex: 1,
    overflow: 'hidden',
    height: '100%',
    flexShrink: 1,
  },
  username_comment: {
    flex: 1,
    width: '100%',
    height: null,
    justifyContent: 'center',
    // borderWidth: 8,
    alignItems: 'stretch',
    // backgroundColor: 'white',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  text: {
    margin: 5,
    fontFamily: 'Montserrat-Medium',
  },
  comment_bottom_bar: {
    flex: 0.6,
    margin: 5,
    borderTopWidth: 1,
    // borderWidth: 5,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rightSection: {
    // borderWidth: 1,
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'center',
  },
  commentCardContainer: {
    flex: 0.25,
    margin: 2,
    borderRadius: 8,
    height: null,
    width: '100%',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignSelf: "center",
  },
});

const App = props => {
  return (
    <>
      <View style={styles.commentCardContainer}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/images/C++.png")} width='100%' height="100%" />
        </View>
        <View style={styles.rightSection}>
          <View style={styles.username_comment}>
            <View style={styles.username_container}>
              <Text style={styles.username}>Email ID</Text>
              <Text style={styles.comment}>
                This is the need
                to te
          </Text>
            </View>
          </View>
          <View style={styles.comment_bottom_bar}>
            <Text style={styles.text}>Like!</Text>
            <Text style={styles.text}>21 H</Text>
            <Text style={styles.text}>39 Likes</Text>
            <Text style={styles.text}>Reply</Text>
            <Text style={styles.text}>View Replies</Text>
          </View>
        </View>
      </View>
    </>
  );
};

App.defaultProps = {};

export default App;

export { styles };
