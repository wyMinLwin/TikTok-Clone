import { View, Text,Pressable } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const LanguageScreen = () => {
  return (
    <View>
        <Text className='font-bold text-md text-gray-500 p-2 mt-1'>App Language</Text>
        <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'>
            <View className='flex-row justify-start items-center'>
                <Text className='font-semibold text-sm'>Choose your default language</Text>
            </View>
            <Entypo name='chevron-right' size={24} />
        </Pressable>
    </View>
  )
}

export default LanguageScreen