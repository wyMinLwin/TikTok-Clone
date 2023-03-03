import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import ChatBox from '../components/ChatBox';


const InboxChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route.params
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:() => (
        <View className= 'flex-1 flex-row items-center '>
          <View className='relative'  >
            <Image className='w-10 h-10 rounded-full mx-3' source={{uri:data.user_profile}} />
            {data.active_status && <View className='bg-green-500 w-3 h-3 rounded-full absolute bottom-0 right-3'></View>}
          </View>
          <View>
            <Text className='font-semibold'>{data.user_name}</Text>
          </View>
        </View>
      ),
    })
  },[route])
  return (
    <ChatBox data={data} />
  )
}

export default InboxChatScreen