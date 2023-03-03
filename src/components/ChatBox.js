import { View } from 'react-native'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { useState, useEffect, useCallback } from 'react'

const ChatBox = (props) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hi',
                createdAt: new Date(),
                user: {
                  _id: props.data.user,
                  name: props.data.user_name,
                  avatar: props.data.user_profile,
                },
              },
              {
                _id: 2,
                text: 'Do you remember? we met in London',
                createdAt: new Date(),
                user: {
                  _id: props.data.user,
                  name: props.data.user_name,
                  avatar: props.data.user_profile,
                },
              },
        ].reverse())
      }, [])

      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])

  return (
    <View className='w-full h-full bg-white'>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
        />
    </View>
  )
}

export default ChatBox