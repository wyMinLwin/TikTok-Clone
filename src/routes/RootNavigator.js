import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import StartUpStack from './StartUpStack'

const RootNavigator = () => {
  const firstTime = useSelector(state => state.firstTime)

  return (
    <>
        <NavigationContainer>
            {firstTime ? <StartUpStack /> : <NavBar />} 
        </NavigationContainer>
    </>
  )
}

export default RootNavigator