import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Topo from '../components/Topo';
import Title from '../components/Title';
import Card from '../components/Card';
import Fotter from '../components/Fotter';

export default function InitPage({navigation}) {

  return (

    <View style={styles.container}>
      <Topo/>
      <Title
        title="Bandung, "
        sub="Indonesia"
      />
      <Card/>
      <Fotter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});
