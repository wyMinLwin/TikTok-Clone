import { View, Pressable, Text } from 'react-native'
import React from 'react'
import PostVideo from '../components/PostVideo'
import Entypo from 'react-native-vector-icons/Entypo'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View className='flex-1'>
      {/* following and public buttons */}
      <View className='absolute w-screen z-10' style={{top:insets.top}}>
        <View className='flex flex-row mx-auto '>
            <Pressable>
              <Text style={{shadowColor: "#000000",shadowOffset: {width: 1,height: 0,},shadowOpacity:  0.30,shadowRadius: 1.2,elevation: 3}} className='text-white font-semibold text-lg'>Following</Text>
            </Pressable>
              <Text style={{shadowColor: "#000000",shadowOffset: {width: 1,height: 0,},shadowOpacity:  0.30,shadowRadius: 1.2,elevation: 3}} className='text-white font-semibold text-lg mx-5'>|</Text>
            <Pressable>
              <Text style={{shadowColor: "#000000",shadowOffset: {width: 1,height: 0,},shadowOpacity:  0.30,shadowRadius: 1.2,elevation: 3}} className='text-white font-semibold text-lg'>Public</Text>
            </Pressable>
        </View>
        <View className='absolute right-5'>
          <Pressable>
            <Entypo name='magnifying-glass' size={24} color='#fff' style={{shadowColor: "#000000",shadowOffset: {width: 1,height: 2,},shadowOpacity:  0.30,shadowRadius: 1.5,elevation: 3}} />
          </Pressable>
        </View>
      </View> 
      <PostVideo />
    </View>
  )
}

export default HomeScreen