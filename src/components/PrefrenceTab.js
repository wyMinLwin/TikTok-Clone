import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FollowingScreen from '../screens/FollowingScreen';
import PublicScreen from '../screens/PublicScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux';

const PrefrenceTab = () => {
    const insets = useSafeAreaInsets();
    const navbarShow = useSelector(state => state.navbarShow)
    console.log(navbarShow)

    const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator initialRouteName='Public'
        screenOptions={{
            swipeEnabled:!navbarShow,
            lazy:true,
            tabBarLabelStyle: {
              fontSize:14,fontWeight:'700',color:'#fff',
              shadowColor: "#000000",shadowOffset: {width: 0.5,height: 0.5,},shadowOpacity:0.5,shadowRadius: 1.5,elevation: 2
            },
            tabBarStyle:{
                width:'70%',
                alignSelf:'center',
                position:'absolute',
                top:insets.top,
                backgroundColor:'#00000000',
            },
            tabBarIndicatorStyle:{
              width:50,height:3,borderRadius:5,left:'25%',marginLeft:-25,backgroundColor:'#fff',
              shadowColor: "#000000",shadowOffset: {width: 0,height: 0.5,},shadowOpacity:0.5,shadowRadius: 1.5,elevation: 2
            }
        }}
      >
        <Tab.Screen name='Following' component={FollowingScreen} />
        <Tab.Screen name='Public' component={PublicScreen} />
      </Tab.Navigator>
    </>
  )
}

export default PrefrenceTab