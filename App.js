import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';

export default function App() {
  return (
      <AppContainer />
  );
}

const AppTabNavigator = createBottomTabNavigator({
    ReadStoryScreen: {screen: ReadStoryScreen,
    navigationOptions: {
      tabBarIcon: <Image source = {require('./assets/read.png')} style = {{width: 20, height: 20}} />  ,
      tabBarLabel: 'Read Story'
    }},
    WriteStoryScreen: {screen: WriteStoryScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require('./assets/write.png')} style = {{width: 20, height: 20}} />,
            tabBarLabel: 'Write Story'
    }},
})

const AppContainer = createAppContainer(AppTabNavigator)
