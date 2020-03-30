import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sf5608bfb: {
    flex: 0.15,
    borderWidth: 6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 55,
    height: 55,
  },
  s4a99eb1f: {
    flex: 0.5,
    fontSize: 20,
  },
  sfc7d6c47: {
    flex: 1,
    flexWrap: 'wrap',
  },
  s1ee27ae8: {
    borderWidth: 2,
    flex: 1,
    overflow: 'hidden',
    height: '100%',
    flexShrink: 1,
  },
  s7cd40702: {
    flex: 1.5,
    justifyContent: 'center',
    borderWidth: 4,
    alignItems: 'stretch',
    backgroundColor: 'rgba(0, 0, 255, 1)',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  sdc3f3ff3: {
    margin: 5,
  },
  sddad81d5: {
    flex: 0.6,
    borderWidth: 5,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  s7f84cb8e: {
    borderWidth: 3,
    flex: 1,
    justifyContent: 'center',
  },
  s5963ab74: {
    flex: 0.15,
    borderWidth: 3,
    flexDirection: 'row',
  },
  s9252cd64: {
    borderWidth: 5,
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  sce384063: {
    flex: 1,
    backgroundColor: 'rgba(230, 24, 24, 1)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

const App = props => {
  return (
    <Fragment>
      <View style={styles.sce384063}>
        <View style={styles.s9252cd64}>
          <View style={styles.s5963ab74}>
            <View style={styles.sf5608bfb}>
              <View />
            </View>
            <View style={styles.s7f84cb8e}>
              <View style={styles.s7cd40702}>
                <View style={styles.s1ee27ae8}>
                  <Text style={styles.s4a99eb1f}>Email ID</Text>
                  <Text style={styles.sfc7d6c47}>
                    This is the the comment This is the the thing that we need
                    to test wewather this will scale up?
                  </Text>
                </View>
              </View>
              <View style={styles.sddad81d5}>
                <Text style={styles.sdc3f3ff3}>Like!</Text>
                <Text style={styles.sdc3f3ff3}>21 H</Text>
                <Text style={styles.sdc3f3ff3}>39 Likes</Text>
                <Text style={styles.sdc3f3ff3}>Reply</Text>
                <Text style={styles.sdc3f3ff3}>View Replies</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

App.defaultProps = {};

export default App;

export {styles};
