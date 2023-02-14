import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AcitivityScreen from '../screens/AcitivityScreen'

const AcitivityStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='AcitivityStack'
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen name='AcitivityStack' component={AcitivityScreen} />
    </Stack.Navigator>
  )
}

export default AcitivityStack