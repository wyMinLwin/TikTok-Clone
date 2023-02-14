import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InboxScreen from '../screens/InboxScreen'

const InboxStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='InboxStack'
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen name='InboxStack' component={InboxScreen} />
    </Stack.Navigator>
  )
}

export default InboxStack