import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { useSelector } from 'react-redux';
import FeedStack from './FeedStack';
import StartUpStack from './StartUpStack'

const RootNavigator = () => {
  const firstTime = useSelector(state => state.firstTime)

  return (
    <>
        <NavigationContainer>
            {firstTime ? <StartUpStack /> : <FeedStack />} 
        </NavigationContainer>
    </>
  )
}

export default RootNavigator