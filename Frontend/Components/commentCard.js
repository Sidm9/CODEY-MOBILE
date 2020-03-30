import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.15,
    borderWidth: 6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 55,
    height: 55,
  },
  username: {
    flex: 0.5,
    fontSize: 20,
    height : null,
  },
  comment: {
    flex : 1,
    width: '100%',
    height : null,
    flexWrap: 'wrap',
    borderWidth :1,
  },
  username_container: {
    borderWidth: 1,
    flex: 1,
    overflow: 'hidden',
    height: '100%',
    flexShrink: 1,
  },
  username_comment: {
    flex : 1,
    width:'100%',
    height:null,
    justifyContent: 'center',
    borderWidth: 8,
    alignItems: 'stretch',
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  text: {
    margin: 5,
  },
  comment_bottom_bar: {
    flex: 0.6,
    borderWidth: 5,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rightSection: {
    borderWidth: 1,
    flex: 1,
    height : null,
    width : null,
    justifyContent: 'center',
  },
  commentCardContainer: {
    flex: 0.25,
    height : null,
    width : null,
    borderWidth: 1,
    flexDirection: 'row',
  },
});

const App = props => {
  return (
    <>
      <View style={styles.commentCardContainer}>
        <View style={styles.imageContainer}>
          <View />
        </View>
        <View style={styles.rightSection}>
          <View style={styles.username_comment}>
            <View style={styles.username_container}>
              <Text style={styles.username}>Email ID</Text>
              <Text style={styles.comment}>
                This is the the comment This is the the thing that we need
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
