/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import { Splash } from './components/Splash';
import { Login } from './components/Login';
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
  //this state will determine whether the splash screen is active or not. Defaults to true when the app is opened.
  const [splashActive, setSplashActive] = useState(true);

  useEffect(() => {
    //Call the function that will handle how long our splash screen will be displayed
    handleSplashScreen();
  }, [])

  const handleSplashScreen = () => {
    //After 4 seconds, set the splash state to false so we can see application content.
    setTimeout(() => {
      setSplashActive(false);
    }, 4000)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
          <View style={styles.body}>
              {
                splashActive ? <Splash /> : <Login />
              }
              
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
