import { View, Pressable, } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicon from 'react-native-vector-icons/Ionicons'

const ProfileVideoButtons = (props) => {
  return (
    <View className='w-full mx-auto mb-2 flex-row justify-evenly' >
        <Pressable className='justify-center items-center' 
        onPress={() => props.setVideoType(prev => prev = 'post')}
        >
            <Entypo name='menu' size={24} />
        </Pressable>
        <Pressable 
         onPress={() => props.setVideoType(prev => prev = 'share')}
        className='justify-center items-center' >
            <Ionicon name='arrow-redo' size={20} />
        </Pressable>
        <Pressable className='justify-center items-center' 
        onPress={() => props.setVideoType(prev => prev = 'liked')}
        >
            <Entypo name='cross' size={24} />
        </Pressable>
      </View>
  )
}

export default ProfileVideoButtons