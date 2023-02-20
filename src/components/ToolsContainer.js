import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'

const ToolsContainer = () => {

    const [like,setLiked] = useState(false);
    const handleLike = () => {
        setLiked( prev => !prev);
    }
  return (
    <View className='absolute right-2 bottom-32 z-30'>
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full overflow-hidden'>
            <Image className='z-20 w-12 h-12' source={{uri:'https://images.haotees.com/wp-content/uploads/2023/02/08025647/3-1-2-1000x800.jpg'}} />
        </View>
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
            <TouchableOpacity onPress={() => handleLike()}>
                <Ionicon
                style={{shadowColor: "#000000",shadowOffset: {width: 0,height: 1,},shadowOpacity:  0.46,shadowRadius: 1.51,elevation: 3}}
                name='heart' size={28} color={`${!like ? '#fff' : 'pink'}`}  />
            </TouchableOpacity>
        </View>
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
            <FontAwesome 
            style={{shadowColor: "#000000",shadowOffset: {width: 0,height: 1,},shadowOpacity:  0.46,shadowRadius: 1.51,elevation: 3}}
            name='comment' size={22} color="#fff" />
        </View>
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
            <Ionicon 
            style={{shadowColor: "#000000",shadowOffset: {width: 0,height: 1,},shadowOpacity:  0.46,shadowRadius: 1.51,elevation: 3}}
            name='share-social' size={24} color="#fff" />
        </View>
    </View>
  )
}

export default ToolsContainer