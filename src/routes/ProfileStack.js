import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'

const ProfileStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='ProfileStack'
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen name='ProfileStack' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileStack