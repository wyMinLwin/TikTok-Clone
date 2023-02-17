import { View, Image } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const ToolsContainer = () => {
  return (
    <View className='absolute right-2 bottom-32'>
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full overflow-hidden'>
            <Image className='z-20 w-12 h-12' source={{uri:'https://images.haotees.com/wp-content/uploads/2023/02/08025647/3-1-2-1000x800.jpg'}} />
        </View>
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
            <Ionicon name='heart' size={28} color="pink" />
        </View>
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
            <EvilIcons name='comment' size={28} color="pink" />
        </View>
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
            <Ionicon name='share-social' size={28} color="pink" />
        </View>
    </View>
  )
}

export default ToolsContainer