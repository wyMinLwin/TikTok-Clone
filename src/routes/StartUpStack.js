import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartScreen from '../screens/StartScreen';
import StartChooseScreen from '../screens/StartChooseScreen';
import StartSwipe from '../screens/StartSwipe';
import FeedScreen from '../screens/FeedScreen';

const Stack = createNativeStackNavigator();
const StartUpStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Start'
    screenOptions={{
      headerShown:false,  
    }}
    >
        <Stack.Screen name='Start' component={StartScreen} />
        <Stack.Screen name='Choose Categories' component={StartChooseScreen} />
        <Stack.Screen name='Swipe' component={StartSwipe} />
        <Stack.Screen name='Feed' component={FeedScreen} />
    </Stack.Navigator>
  )
}

export default StartUpStack