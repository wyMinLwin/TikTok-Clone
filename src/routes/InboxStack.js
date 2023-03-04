import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InboxScreen from '../screens/InboxScreen'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';
import InboxChatScreen from '../screens/InboxChatScreen'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Pressable } from 'react-native';

//dots-three-vertical
const InboxStack = () => {
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
    <Stack.Navigator initialRouteName='InboxStack'
    screenOptions={{headerShown:true,}}
    >
      <Stack.Screen name='InboxStack' component={InboxScreen}
          options={{
            headerTitle:'Inbox',
            headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicon name='ios-chevron-back' size={26}></Ionicon>
            </Pressable>)
          }}
      />
      <Stack.Screen name='InboxChatStack' component={InboxChatScreen} 
        options={{
          headerRight: () => (
            <Pressable onPress={() => console.log('logging from InboxStack.js')}>
              <Entypo name='dots-three-vertical' size={20}></Entypo>
            </Pressable>),
          headerBackTitle:''
        }} 
      />
    </Stack.Navigator>
  )
}

export default InboxStack