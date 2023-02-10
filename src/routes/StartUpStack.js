import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartScreen from '../screens/StartScreen';
import StartChooseScreen from '../screens/StartChooseScreen';
import StartSwipe from '../screens/StartSwipe';
import FeedStack from './FeedStack';

const Stack = createNativeStackNavigator();
const StartUpStack = () => {
  const [fistTime,setFirstTime] = useState(true);
  return (
    <Stack.Navigator
    initialRouteName='Start'
    screenOptions={{
      headerShown:false,  
    }}
    >
        {
          fistTime ? (
          <Stack.Group>
            <Stack.Screen name='Start' component={StartScreen} />
            <Stack.Screen name='Choose Categories' component={StartChooseScreen} />
            <Stack.Screen name='Swipe' component={StartSwipe} />
            <Stack.Screen name='Feed' component={FeedStack} />
          </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name='Feed' component={FeedStack} />
            </Stack.Group>
          )
        }
    </Stack.Navigator>
  )
}

export default StartUpStack