import { View, Text, Image } from 'react-native'
import React from 'react'

const Noti = (props) => {
  return (
    <View className='flex-row justify-start my-2 '>
        <Image className='w-16 h-16 rounded-full'  source={{uri:props.data.user_profile}}/>
        <View className='flex-col justify-between ml-5'>
            <View className='flex-row'>
                <View className='mr-10'><Text className='text-lg p-0'>{props.data.user_name}</Text></View><Text>22 Jul</Text>
            </View>
            <Text className='text-lg font-light'>
                { props.data.activity_type === 'fans' 
                ?  `Followed you!` 
                : props.data.activity_type === 'share' 
                ? `Share your Post!`
                : props.data.activity_type === `comment`
                ? `Commented on your Post!`
                : props.data.activity_type === `love`
                ? `Liked your post!`
                : null
                }
            </Text>
         </View>
    </View>
  )
}

export default Noti