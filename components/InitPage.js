import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Topo from './Topo';
import Title from './Title';
import Card from './Card';

export default function InitPage() {
  return (
    <View style={styles.container}>
      <Topo/>
      <Title
        title="Bandung, "
        sub="Indonesia"  
      />
      <Card/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});
