import React from 'react'; 
import { StyleSheet, Text, View,Image } from 'react-native'; 
import { createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs'; 

import ReadStoriesScreens from './Screens/ReadStoriesScreen';
import WriteStoriesScreens from './Screens/WriteStoriesScreen';

export default class App extends React.Component { 
  render(){ 
  return ( 
  
    <AppContainer/>
    
  ); 
  } } 

  const TabNavigator = createBottomTabNavigator({ 
    WriteStories: {screen:  WriteStoriesScreens }, 
    ReadStories: {screen: ReadStoriesScreens}, 
  }
    
    
); 

    const AppContainer = createAppContainer(TabNavigator);
 