import { View, Text } from 'react-native'
import React from 'react'
import ActivePeople from '../components/ActivePeople'
import Messages from '../components/Messages'

const InboxScreen = () => {
  return (
    <View className='h-full bg-white px-2'>
      <View className='mt-2'> 
        <Text className='font-semilight text-sm'>online</Text>
        <ActivePeople />
      </View>
      <View className='mt-2 flex-1 h-full'> 
        <Text className='font-semilight text-sm'>Messages</Text>
        <Messages />
      </View>
    </View>
  )
}

export default InboxScreen