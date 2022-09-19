import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/screens/Navigation';
import InitPage from './src/screens/InitPage';
import SecondPage from './src/screens/SecondPage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <InitPage/> */}
      <SecondPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});
