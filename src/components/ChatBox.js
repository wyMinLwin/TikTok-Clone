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
                text: `Layin' down in my bed at 4AM, we get up`,
                createdAt: new Date(),
                user: {
                  _id: 'PRIME_WAIYAN',
                  name: props.data.user_name,
                  avatar: props.data.user_profile,
                },
              },
              {
                _id: 2,
                text: `Girl, let's get up, lost forever`,
                createdAt: new Date(),
                user: {
                  _id: props.data.user,
                  name: props.data.user_name,
                  avatar: props.data.user_profile,
                },
              },
              {
                _id: 3,
                text: `Let's take a drive, feel alive, let's just be together`,
                createdAt: new Date(),
                user: {
                  _id: 'PRIME_WAIYAN',
                  name: props.data.user_name,
                  avatar: props.data.user_profile,
                },
              },
              {
                _id: 4,
                text: `Us together, nothing's better`,
                createdAt: new Date(),
                user: {
                  _id: props.data.user,
                  name: props.data.user_name,
                  avatar: props.data.user_profile,
                },
              },
              {
                _id: 5,
                text: `You got those eyes like the sky, pretty butterfly. I got the sunset on my mind, your body so divine`,
                createdAt: new Date(),
                user: {
                  _id: 'PRIME_WAIYAN',
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
              _id: 'PRIME_WAIYAN',
            }}
        />
    </View>
  )
}

export default ChatBox