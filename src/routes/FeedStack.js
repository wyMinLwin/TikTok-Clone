import { View, Text } from 'react-native'
import React from 'react'
import FeedScreen from '../screens/FeedScreen';
import CameraTest from '../../CameraTest';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();


const FeedStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Feed'
    screenOptions={{
      headerShown:false,  
    }}
    >
        <Stack.Screen name='Feeed' component={FeedScreen} />
        <Stack.Screen name='Camera' component={CameraTest} />
    </Stack.Navigator>
  )
}

export default FeedStack