/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import CommentCard from '../Components/commentCard';
import { commentData } from '../Database/DbComment';
const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    width: '95%',
    height: null,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});



const Temp = commentData;
// function First_5_comments_handler({ usernames, comment , navigation} ) {
//   return (
//     <View style={{ flex: 1, width: '100%' }}>
//       <View style={{ marginVertical: '1%' }}>
//       <View style = {{ flex :1 , flexDirection : 'row' , marginLeft : '2%', alignItems :'center'}}>
//       <Image style = {styles.username_pic} source={require('../assets/images/tyler.jpg')}/>
//         <Text style={styles.commentUsername}>{usernames}</Text>
//         </View>
//         <Text numberOfLines={1} style={styles.commentText}>{comment}</Text>
//       </View>
//     </View>
//   );
// }
export default function Comment() {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={Temp}
          renderItem={({ item }) => (
            <CommentCard
            username={item.usernames}
            comment={item.comment}
            likes = {item.likes}
            reply = {item.reply}
            timestamp = {item.time}/>
           )} />
      </View>
    </>
  );
}
