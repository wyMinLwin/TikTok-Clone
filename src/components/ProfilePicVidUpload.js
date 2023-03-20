import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import navbarShowSlice from '../store/navbarShow'

const ProfilePicVidUpload = (props) => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(navbarShowSlice.actions.hideNavbarShow())
        return (() => {
            dispatch(navbarShowSlice.actions.showNavbarShow())
        })
    },[])
  return (
    <View className='w-full h-fit bg-white absolute bottom-0 left-0 right-0 rounded-t-md py-2'>
      <Text className='mx-auto font-semibold p-3'>Change Profile Picture or Video</Text>
      <View className='flex-row items-center justify-start ml-3 p-2'>
      <Entypo name='images' size={28} /><Text className='ml-3 font-base'>Upload new Photo or Video</Text>
      </View>
      <View className='flex-row items-center justify-start ml-3 p-2'>
        <Entypo name='camera' size={28} /><Text className='ml-3 font-base'>Take Photo or Video</Text>
      </View>
      <Pressable className='mx-auto p-3' onPress={() => props.closeModel()}>
        <Text className='text-red-500'>Cancel</Text>
      </Pressable>
    </View>
  )
}

export default ProfilePicVidUpload