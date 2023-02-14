import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='HomeStack' screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomeStack' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack