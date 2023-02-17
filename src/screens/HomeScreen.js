import { View, Pressable, Text } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import PrefrenceTab from '../components/PrefrenceTab'


const HomeScreen = () => {
  
  return (
    <>
      <PrefrenceTab />
      {/* following and public buttons */}
      {/* <View className='absolute w-screen z-10' style={{top:insets.top}}>
        <View className='absolute right-5'>
          <Pressable>
            <Entypo name='magnifying-glass' size={24} color='#fff' style={{shadowColor: "#000000",shadowOffset: {width: 1,height: 2,},shadowOpacity:  0.30,shadowRadius: 1.5,elevation: 3}} />
          </Pressable>
        </View>
      </View>  */}
      {/* <PostVideo /> */}
    </>
  )
}

export default HomeScreen