import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'
import { Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import SettingScreen from '../screens/SettingScreen';
import ProfileVideoPlayerScreen from '../screens/ProfileVideoPlayerScreen';
import EditProfileDataScreen from '../screens/EditProfileDataScreen';
import EditPasswordScreen from '../screens/EditPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LanguageScreen from '../screens/LanguageScreen';
import DarkModeScreen from '../screens/DarkModeScreen';


const ProfileStack = () => {
  const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='ProfileStack'
    screenOptions={{
      headerShown:true,  
      headerBackTitle:'',
    }}
    >
        <Stack.Screen name='ProfileStack' component={ProfileScreen}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicon name='ios-chevron-back' size={26}></Ionicon>
            </Pressable>),
          headerTitle:'Me',
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('SettingStack')}>
              <Entypo name='menu' size={24}></Entypo>
            </Pressable>)
        }}
        />
        <Stack.Screen name='SettingStack' component={SettingScreen} 
        options={{
          headerTitle:'Setting',
        }}
        />
        <Stack.Screen name='ProfileVideoPlayerStack' component={ProfileVideoPlayerScreen} 
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name='EditProfileDataStack' component={EditProfileDataScreen} 
        options={{
          headerTitle:'Edit Profile',
        }}
        />
        <Stack.Screen name='EditPasswordStack' component={EditPasswordScreen} 
        options={{
          headerTitle:'Password',
        }}
        />
        <Stack.Screen name='ForgotPasswordStack' component={ForgotPasswordScreen} 
        options={{
          headerTitle:'Forgot Password',
        }}
        />
        <Stack.Screen name='LanguageStack' component={LanguageScreen} 
        options={{
          headerTitle:'Language',
        }}
        />
        <Stack.Screen name='DarkModeStack' component={DarkModeScreen} 
        options={{
          headerTitle:'Dark mode',
        }}
        />
    </Stack.Navigator>
  )
}

export default ProfileStack