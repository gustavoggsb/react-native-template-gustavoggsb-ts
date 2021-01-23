import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';

const Main = () => {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={{
        uri:
          'https://cdnb.artstation.com/p/assets/images/images/005/152/717/large/nikita-kozlov-321.jpg',
      }}
    >
      <Text style={styles.welcome}>Hello!!</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#5aa2dd',
  },
});

export default Main;
