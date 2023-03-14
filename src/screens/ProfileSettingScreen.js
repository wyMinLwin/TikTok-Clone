import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import navbarShowSlice from '../store/navbarShow'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ProfileSettingScreen = () => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
   useEffect(() => {
    dispatch(navbarShowSlice.actions.hideNavbarShow())
    return(() => {
        dispatch(navbarShowSlice.actions.showNavbarShow())
    })
   },[])
  return (
    <View className='mt-2 px-2 h-full'>
        <Text className='font-bold text-lg'>Personal Information</Text>
        <View>
            <TextInput className='p-2 py-3 rounded-md bg-orange-100 mt-1' placeholder='Enter your new name' />
            <TextInput className='p-2 py-3 rounded-md bg-orange-100 mt-1' placeholder='Enter userID' />
            <TextInput className='p-2 py-3 rounded-md bg-orange-100 mt-1' placeholder='Enter new password' />
            <TextInput className='p-2 py-3 rounded-md bg-orange-100 mt-1' placeholder='Enter new confirm password' />
        </View>
        <Text className='font-bold text-lg'>Privacy</Text>
        <View>
            <Pressable className='px-2 flex-row justify-between items-center bg-orange-100 rounded-md py-2'>
                <Text className='font-semibold text-sm'>who can see my post</Text>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
            <Pressable className='px-2 flex-row justify-between items-center bg-orange-100 rounded-md py-2'>
                <Text className='font-semibold text-sm'>My Blocklist</Text>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
            <Pressable className='px-2 flex-row justify-between items-center bg-orange-100 rounded-md py-2'>
                <Text className='font-semibold text-sm'>Profile Lock</Text>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
        </View>
        <Pressable className='bg-orange-700 justify-center items-center p-2 w-10/12 mx-auto mt-auto' style={{marginBottom:insets.bottom+5}}>
            <Text className='text-xl font-semibold text-white'>Log out</Text>
        </Pressable>
    </View>
  )
}

export default ProfileSettingScreen