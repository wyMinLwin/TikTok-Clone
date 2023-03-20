import { View, Pressable, } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicon from 'react-native-vector-icons/Ionicons'

const ProfileVideoButtons = (props) => {
  return (
    <View className='w-full mx-auto mb-2 flex-row justify-evenly' >
        <Pressable className={` justify-center items-center`} 
        onPress={() => props.setVideoType(prev => prev = 'post')}
        >
            <Entypo name='controller-play' size={30} color={`${props.videoType === 'post' ? '#000' : '#8b8b8b'}`} />
        </Pressable>
        <Pressable className={`justify-center items-center`} 
        onPress={() => props.setVideoType(prev => prev = 'liked')}
        >
            <Entypo name='heart' size={30} color={`${props.videoType === 'liked' ? '#000' : '#8b8b8b'}`}/>
        </Pressable>
        <Pressable 
         onPress={() => props.setVideoType(prev => prev = 'share')}
        className={`justify-center items-center`} >
            <Ionicon name='arrow-redo' size={30} color={`${props.videoType === 'share' ? '#000' : '#8b8b8b'}`}/>
        </Pressable>
        
      </View>
  )
}

export default ProfileVideoButtons