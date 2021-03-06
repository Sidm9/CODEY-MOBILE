/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Header from '../Components/Navbar';
import Button from '../Components/Button';
import Dark from '../DarkMode/PlaygroundDark';
import CategoryCard from '../Components/CategoryScreenComponents/CategoryCard';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth : 3,
    justifyContent : "space-evenly",
    flexDirection: "row",
    flexWrap : "wrap",
    backgroundColor: 'white',
  },
  text: {
    fontSize: 50,
    padding: 50,
    color: 'black',
    fontFamily : 'Montserrat-Medium',
  },
});

export default function Playground() {
  const [state, setstate] = useState(false);
  const [as, setas] = useState(styles);
  function handler() {
    setstate(!state);
    state === true ? setas(Dark) : setas(styles);
    console.log(as);
  }
  return (
    <>
  <Header title="Playground" />
      <View style={styles.container}>
    {/*       <Text style={as.text}>
          TEST ME!
      </Text>
        <Button text="  Dark Mode Test  " click={handler} />  */}

        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
      </View>
    </>
  );
}
