import { View, Image, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const ActivePeople = () => {
    const activePeople = useSelector(state => state.activePeople);
    const navigation = useNavigation();
  return (
    <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}    
        data={activePeople}
        keyExtractor={(item) => item._id}
        renderItem= {(item) => {
          return (
            <Pressable className='m-3 ml-0' onPress={() => navigation.navigate("InboxChatStack",{
             data : item.item
            })}>
              <Image className='w-14 h-14 rounded-full' source={{uri:item.item.user_profile}} />
              <View className='bg-green-500 w-3 h-3  rounded-full absolute bottom-0 right-1'></View>
            </Pressable>
          )
        }}
    />
  )
}

export default ActivePeople