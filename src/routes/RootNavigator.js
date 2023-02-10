import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
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