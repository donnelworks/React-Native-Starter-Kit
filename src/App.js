import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Router} from './configs';
import {Color} from './helpers';
import {Host} from 'react-native-portalize';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Color.primary} />
      <Host>
        <Router />
      </Host>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
