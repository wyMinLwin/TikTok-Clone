import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AcitivityScreen from '../screens/AcitivityScreen'
import { Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import SpecificActivityScreen from '../screens/SpecificActivityScreen';

const AcitivityStack = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    useFocusEffect(
      useCallback(() => {
        navigation.setOptions({
          tabBarStyle: { display: 'none' },
          tabBarShowLabel: false,
        })
      },[navigation])
    );
  return (
    <Stack.Navigator initialRouteName='AcitivityStack'
    screenOptions={{headerShown:true,}}
    >
      <Stack.Screen name='AcitivityStack' component={AcitivityScreen} 
        options={{
          headerTitle:'Activity',
          headerLeft: () => (
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicon name='ios-chevron-back' size={26}></Ionicon>
          </Pressable>)
        }}
      />
      <Stack.Screen name='SpecificActivityStack' component={SpecificActivityScreen} 
      options={{
        headerBackTitle:''
      }}
      />
    </Stack.Navigator>
  )
}

export default AcitivityStack