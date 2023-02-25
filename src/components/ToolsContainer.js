import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

const ToolsContainer = (props) => {
    const [like,setLiked] = useState(false);
    const handleLike = () => {
        setLiked( prev => !prev);
    }

  return (
    <View className='absolute right-2 bottom-32 z-30'>
        
        {/* Profile  */}
        <View className='my-2 w-12 justify-center items-center relative' >
            <Image className='z-30 w-12 h-12 rounded-full' source={{uri:props.user_profile}} />
            <View className='w-5 h-5 rounded-full justify-center align-middle items-center absolute z-40' style={{backgroundColor:'#000099',bottom:-7}} >
                <Feather name='plus' size={20} color='#fff' />
            </View>
        </View>

        {/* like button */}
        <TouchableOpacity onPress={() => handleLike()}>
            <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
                    <Ionicon
                    style={{shadowColor: "#000000",shadowOffset: {width: 0,height: 1,},shadowOpacity:  0.46,shadowRadius: 1.51,elevation: 1}}
                    name='heart' size={28} color={`${!like ? '#fff' : '#ff7acd'}`}  />
            </View>
        </TouchableOpacity>

        {/* comment button */}
        <TouchableOpacity onPress={() => {props.controlCommentsBoxVisibility()}}>
            <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
                <FontAwesome 
                style={{shadowColor: "#000000",shadowOffset: {width: 0,height: 1,},shadowOpacity:  0.46,shadowRadius: 1.51,elevation: 1}}
                name='comment' size={22} color="#fff" />
            </View>

        </TouchableOpacity>
        {/* Share button */}
        <View className='p-2 my-1 w-12 h-12 justify-center items-center rounded-full bg-white'>
            <Ionicon 
            style={{shadowColor: "#000000",shadowOffset: {width: 0,height: 1,},shadowOpacity:  0.46,shadowRadius: 1.51,elevation: 1}}
            name='share-social' size={24} color="#fff" />
        </View>
    </View>
  )
}

export default ToolsContainer