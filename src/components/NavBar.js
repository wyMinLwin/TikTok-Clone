import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../routes/HomeStack';
import InboxStack from '../routes/InboxStack';
import ActivityStack from '../routes/ActivityStack';
import ProfileStack from '../routes/ProfileStack';
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import CameraTest from '../../CameraTest'
import { useSelector } from 'react-redux';

const NavBar = () => {
    const Tab = createBottomTabNavigator();
    const navbarShow = useSelector(state => state.navbarShow)
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        tabBarStyle:{
          display : `${navbarShow ? 'none' : 'flex'}`,
          position:'absolute',
          bottom:0,
          borderTopWidth:0,
          backgroundColor:'#000',      
        },
      }}
    >
        <Tab.Screen name='Home' component={HomeStack} 
          options={{
            tabBarActiveTintColor:'#fff',
            headerShown:false,
            tabBarIcon: ({focused,size,color}) => {
              let iconName = focused ? 'ios-home' : 'ios-home-outline'
              return <Ionicon name={iconName} size={size} color={color} />
            }
          }}     
        />

        <Tab.Screen name='Inbox' component={InboxStack} 
          options={{
            tabBarActiveTintColor:'#fff',
            headerShown:false,
            tabBarIcon: ({focused,size,color}) => {
              let iconName = focused ? 'message-reply-text' : 'message-reply-text-outline'
              return <MaterialCommunityIcon name={iconName} size={size} color={color} />
            }
          }}
        />

        <Tab.Screen name='Plus' component={CameraTest} 
          options={{
            tabBarActiveTintColor:'#fff',
            headerShown:false,
            tabBarLabel:'',
            tabBarIcon: ({size}) => {           
              return (         
                <View
                className='justify-center items-center align-center w-8/12 h-full rounded-lg mt-5'
                style={{backgroundColor:'#555555'}}
                >
                  <FontAwesome name={'plus'} size={size} color={'#fff'} />
                </View>
              )
            }
          }}
        />

        <Tab.Screen name='Activity' component={ActivityStack} 
          options={{
            tabBarActiveTintColor:'#fff',
            headerShown:false,
            tabBarIcon: ({focused,size,color}) => {
              let iconName = focused ? 'bell' : 'bell-outline'
              return <MaterialCommunityIcon name={iconName} size={size} color={color} />
            }
          }}
        />

        <Tab.Screen name='Profile' component={ProfileStack} 
          options={{
            tabBarActiveTintColor:'#fff',
            headerShown:false,
            tabBarIcon: ({focused,size,color}) => {
              let iconName = focused ? 'user-circle' : 'user-circle-o'
              return <FontAwesome name={iconName} size={size} color={color} />
            }
          }}
        />
    </Tab.Navigator>
  )
}

export default NavBar