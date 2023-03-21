import { View, Text,Pressable } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const ShareProfile = (props) => {
  return (
    <View>
        <Text className='mx-auto p-1 text-md font-semibold mb-2'>Share Profile</Text>
        <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'>
        <View className='flex-row justify-start items-center'>
            <FontAwesome name='copy' size={18} />
            <Text className='ml-3 font-semibold text-sm'>Copy Profile Link</Text>
        </View>
        <Entypo name='chevron-right' size={24} />
      </Pressable>
      <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'>
        <View className='flex-row justify-start items-center'>
            <FontAwesome name='facebook-square' size={18} />
            <Text className='ml-3 font-semibold text-sm'>Share to Facebook</Text>
        </View>
        <Entypo name='chevron-right' size={24} />
      </Pressable>
      <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'>
        <View className='flex-row justify-start items-center'>
            <FontAwesome name='instagram' size={18} />
            <Text className='ml-3 font-semibold text-sm'>Share to Instagram</Text>
        </View>
        <Entypo name='chevron-right' size={24} />
      </Pressable>
      <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'>
        <View className='flex-row justify-start items-center'>
            <FontAwesome name='twitter-square' size={18} />
            <Text className='ml-3 font-semibold text-sm'>Share to Twitter</Text>
        </View>
        <Entypo name='chevron-right' size={24} />
      </Pressable>
      <Pressable onPress={() => props.closeModel()} className='mx-auto p-2'>
        <Text>Cancel</Text>
      </Pressable>
    </View>
  )
}

export default ShareProfile