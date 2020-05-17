/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Splash } from './components/Splash';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
          <View style={styles.body}>
              <Splash />
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  body: {
    flex:1,
    backgroundColor: Colors.white,
  },
});

export default App;
