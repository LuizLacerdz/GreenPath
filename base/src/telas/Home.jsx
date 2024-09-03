import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Input} from '@rneui/themed';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar hidden /> */}
      <View style={styles.div1}>
        <Text>Olá Mundo!</Text>
      </View>
      <Input
        placeholder="INPUT WITH ICON"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5c6d7',
  },
  div1: {
    flex: 0.5,
    backgroundColor: 'red',
    marginLeft: 20,
    marginRight: '5%',
  },
  div2: {
    flex: 0.5,
    backgroundColor: 'green',
  },
});
