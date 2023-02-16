import { View, Text, TouchableOpacity } from 'react-native'
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

const NavBar = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        tabBarStyle:{
          position:'absolute',
          bottom:0,
          borderTopWidth:0,
          backgroundColor:'#000',
          borderTopLeftRadius:'15',
          borderTopRightRadius:'15',
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
                className='justify-center items-center h-16 w-full rounded-t-lg'
                style={{backgroundColor:'#000',borderColor:'#fff',borderWidth:0.3,borderBottomWidth:0,}}
                >
                  <FontAwesome name={'plus'} size={size+10} color={'#fff'} />
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