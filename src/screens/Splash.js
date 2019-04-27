import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import { theme } from "../constants";

export default class Splash extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <ImageBackground source={require('../assets/splashBG.jpg')} style={[styles.container, {width: '100%', height: '100%'}]}>
        <Text style={styles.text}>For a clean environment</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}  
          >
          <Text>Got it!</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    marginBottom: 30
  },
  button: {
    marginBottom: 100,
    width: '50%',
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
