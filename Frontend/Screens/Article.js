import React, {Fragment} from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import bg from '../assets/images/LA.jpg';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  Title_Heading: {
    fontSize: 30,
    margin: 20,
    zIndex: 100,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  imageB: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    resizeMode: 'contain',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(52, 52, 52, 0.008)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  byLine: {
    fontSize: 15,
    marginBottom: 10,
    margin: 5,
    fontFamily: 'Montserrat-Medium',
    zIndex: 100,
  },
  minuteDuration: {
    marginBottom: 10,
    margin: 10,
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  byLineMinuteRead: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: -1000,
    marginTop: 10,
    marginLeft: 10,
  },
  tags: {
    margin: 5,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    // color: 'rgba(248, 248, 248, 1)',
  },
  tagContainer: {
    borderRadius: 50,
    borderColor: 'rgba(17, 17, 241, 1)',
    borderWidth: 2,
    marginLeft: 10,
  },
  byLineAndMinuteReadContainer: {
    width: '100%',
    zIndex: -100,
    flexDirection: 'row',
    height: 50,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  articleContentContainer: {
    flex: 1,
    zIndex: -100,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
  },
  s8a286441: {
    flex: 1,
  },
  s001b12f2: {
    margin: 15,
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
});

export default function Article(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={bg}
            style={styles.imageB}
            // eslint-disable-next-line react-native/no-inline-styles
            imageStyle={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}>
            <Text style={styles.Title_Heading}>
              IpSumTHis is Lorem IpSumTHi
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.articleContentContainer}>
          <View style={styles.byLineMinuteRead}>
            <Text style={styles.byLine}>By : Hokoona Matata</Text>
            <Text style={styles.minuteDuration}>5 Minute Read</Text>
          </View>
          <View style={styles.byLineAndMinuteReadContainer}>
            <View style={styles.tagContainer}>
              <Text style={styles.tags}>Coding</Text>
            </View>
            <View style={styles.tagContainer}>
              <Text style={styles.tags}>I have no life</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.s8a286441}>
        <Text style={styles.s001b12f2}>
          THis is Lorem IpSum is Lorem IpSumTHis is Lorem IpSumTHis is Lorem
          IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is
          Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem
          IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is
          Lorem IpSumTHis is Lorem I IpSumTHis is Lorem IpSumTHis is Lorem
          IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is
          Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem
          IpSumTHis is Lorem IpSumTHis is Lorem I IpSumTHis is Lorem IpSumTHis
          is Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem
          IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is
          Lorem IpSumTHis is Lorem IpSumTHis is Lorem I IpSumTHis is Lorem
          IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is
          Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem
          IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is Lorem IpSumTHis is
          Lorem IpSum
        </Text>
      </View>
    </ScrollView>
  );
}
