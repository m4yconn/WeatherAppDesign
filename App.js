import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitPage from './components/InitPage';

export default function App() {
  return (
    <View style={styles.container}>
      <InitPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});
