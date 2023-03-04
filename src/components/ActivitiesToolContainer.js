import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const ActivitiesToolContainer = () => {
    const navigation = useNavigation();
    const buttonsData = [
        {
            name:"Fans",
            colors:['#fce7c0', '#ffc149', '#ffab1c'],
            icon:<Ionicon name='ios-person-add-outline' size={34} color='#fff'/>,
            activity_type:'Fans',
        },
        {
            name:"Share",
            colors:['#cfffdb', '#46ff64', '#18ff3b'],
            icon:<Ionicon name='arrow-redo-outline' size={34} color='#fff'/>,
            activity_type:'Share',
        },
        {
            name:"Comment",
            colors:['#ceffff', '#60ffff', '#1effff'],
            icon: <FontAwesome name='comment-o' size={34} color='#fff'/>,
            activity_type:'Comment',
        },
        {
            name:"Love",
            colors:['#ffb7dc', '#ff4492', '#ff1b79'],
            icon: <FontAwesome name='heart-o' size={34} color='#fff'/>,
            activity_type:'Love',
        },
    ]
  return (
    <View className='flex-row justify-evenly items-center my-3'>
        {buttonsData.map(data => (
        <View className='flex-col justify-center items-center' key={data.name}>
            <Pressable
            className='mb-2'
            onPress={() => navigation.navigate("SpecificActivityStack",{activity_type:data.activity_type})}
            >
                <LinearGradient 
                className='w-fit h-fit p-3 rounded-full justify-center items-center'
                colors={data.colors}
                >
                    {data.icon}
                </LinearGradient>
            </Pressable>
            <Text>
                {data.name}
            </Text>
        </View>
        ))}
    </View>
  )
}

export default ActivitiesToolContainer