import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Messages = () => {
    const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const messages = useSelector(state => state.messages)
    const date = new Date();
    const dateFormat = `${months[date.getMonth()].toString().slice(0,3)} ${date.getDate().toString()}`;
    const navigation = useNavigation();
    
  return (
    <FlatList
        data={messages}
        showsVerticalScrollIndicator={false}
        keyExtractor= {(item) => item._id}
        renderItem = { (item) => {
            return (
                <Pressable onPress={() => navigation.navigate("InboxChatStack",{
                    data:item.item
                })}>
                    <View className='w-full items-center flex-row my-2'> 
                        <View className=''>
                            <Image className='w-14 h-14 rounded-full' source={{uri:item.item.user_profile}} />
                            {item.item.active_status && <View className='bg-green-500 w-3 h-3  rounded-full absolute bottom-0 right-1'></View>}
                        </View>
                        <View className='w-8/12 ml-2 flex-col justify-evenly '>
                            <Text className='font-bold text-base'>{item.item.user_name}</Text>
                            <Text numberOfLines={2} ellipsizeMode='tail'>
                            Thursday, October 31st. 
                            The city streets are crowded for the holiday. Even with 
                            the rain. Hidden in the chaos is the element, waiting to strike like snakes. And I'm there too. Watching. 2 years of nights have turned me into a nocturnal animal. I must choose my targets carefully. It's a big city. I can't be everywhere. But they don't know where I am. We have a signal now, for when I'm needed. When that light hits the sky, it's not just a call- it's a warning. To them. Fear is a tool. They think I'm hiding in the shadows. But I AM the shadows.
                            </Text>
                        </View>
                        <View className='ml-auto mb-auto'>
                            <Text>{dateFormat}</Text>
                        </View>
                    </View>
                </Pressable>
            )
        }}
    />
  )
}

export default Messages