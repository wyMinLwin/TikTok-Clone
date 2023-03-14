import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'
import { Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import ProfileSettingScreen from '../screens/ProfileSettingScreen';
import ProfileVideoPlayerScreen from '../screens/ProfileVideoPlayerScreen';


const ProfileStack = () => {
  const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='ProfileStack'
    screenOptions={{
      headerTitle: 'Profile',
      headerShown:true,  
    }}
    >
        <Stack.Screen name='ProfileStack' component={ProfileScreen}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicon name='ios-chevron-back' size={26}></Ionicon>
            </Pressable>),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('ProfileSettingStack')}>
              <Entypo name='dots-three-vertical' size={20}></Entypo>
            </Pressable>)
        }}
        />
        <Stack.Screen name='ProfileSettingStack' component={ProfileSettingScreen} 
        options={{
          headerTitle:'Setting',
          headerBackTitle:'',
        }}
        />
        <Stack.Screen name='ProfileVideoPlayerStack' component={ProfileVideoPlayerScreen} 
        options={{
          headerShown:false,
        }}
        />
    </Stack.Navigator>
  )
}

export default ProfileStack