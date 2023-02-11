import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartScreen from '../screens/StartScreen';
import StartChooseScreen from '../screens/StartChooseScreen';
import StartSwipe from '../screens/StartSwipe';

const Stack = createNativeStackNavigator();

const StartUpStack = (props) => {
  return (
    <Stack.Navigator
    initialRouteName='Start'
    screenOptions={{
      headerShown:false,  
    }}
    >
      <Stack.Group>
        <Stack.Screen name='Start' component={StartScreen}  />
        <Stack.Screen name='Choose Categories' component={StartChooseScreen} options={{gestureEnabled:false}} />
        <Stack.Screen name='Swipe' component={StartSwipe} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StartUpStack