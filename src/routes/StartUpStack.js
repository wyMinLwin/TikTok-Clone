import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartScreen from '../screens/StartScreen';
import StartChooseScreen from '../screens/StartChooseScreen';
import StartSwipe from '../screens/StartSwipe';
import LoginOptionScreen from '../screens/LoginOptionScreen';
import CreateAccountWithPhoneScreen from '../screens/CreateAccountWithPhoneScreen'

const Stack = createNativeStackNavigator();

const StartUpStack = (props) => {
  return (
    <Stack.Navigator
    initialRouteName='Start'
    screenOptions={{
      headerShown:false,  
      headerBackTitle:'',
    }}
    >
      <Stack.Group>
        <Stack.Screen name='Start' component={StartScreen}  />
        <Stack.Screen name='Login Option' component={LoginOptionScreen} options={{gestureEnabled:false}} />
        <Stack.Screen name='Choose Categories' component={StartChooseScreen}  />
        <Stack.Screen name='Swipe' component={StartSwipe} />
        <Stack.Screen name='Create Account With Phone' component={CreateAccountWithPhoneScreen} 
        options={{
          headerShown:true,
          headerTitle: 'Create with Phone Number',
        }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StartUpStack