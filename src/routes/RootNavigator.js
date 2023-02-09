import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import StartUpStack from './StartUpStack'

const RootNavigator = () => {
  return (
    <>
        <NavigationContainer>
            <StartUpStack />
        </NavigationContainer>
    </>
  )
}

export default RootNavigator