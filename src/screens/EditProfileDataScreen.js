import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'


const EditProfileDataScreen = () => {
  return (
    <View className='bg-gray-100 flex-1'>
        <View className='my-3 flex-row justify-evenly items-center'>
            <View className='justify-center items-center'>
                <View className='w-28 h-28 overflow-hidden rounded-full border-2 border-white'>
                    <TouchableOpacity className='z-40 w-full h-full flex justify-center items-center'>
                        <Ionicon name='camera-outline' size={40} color={'white'} />
                    </TouchableOpacity>
                    <Image className='w-full absolute h-full z-30' source={{uri:'https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/331983456_772736064272486_6062597388829844809_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dVmbGvZ98IIAX_JMwIK&_nc_ht=scontent.frgn4-1.fna&oh=00_AfCIPeeVCf-WWiRiYdBLHv-zYQdF2hZQQGALEahQ0_93rQ&oe=6413C483'}} />
                </View>
                <Text className='font-semibold mt-3 '>Change Photo</Text>
            </View>
            <View className='justify-center items-center'>
                <View className='w-28 h-28 overflow-hidden rounded-full border-2 border-white'>
                    <TouchableOpacity className='z-40 w-full h-full flex justify-center items-center'>
                        <Ionicon name='camera-outline' size={40} color={'black'} />
                    </TouchableOpacity>
                    <></>{/*     <Image className='w-full absolute h-full z-30' source={{uri:'https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/331983456_772736064272486_6062597388829844809_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dVmbGvZ98IIAX_JMwIK&_nc_ht=scontent.frgn4-1.fna&oh=00_AfCIPeeVCf-WWiRiYdBLHv-zYQdF2hZQQGALEahQ0_93rQ&oe=6413C483'}} /> */}
                </View>
                <Text className='font-semibold mt-3 '>Change Video</Text>
            </View>
        </View>
        <View>
            <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Your Info</Text>
            <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
            style={styles.customBorder}
            >
                <Text className='w-1/2 '>Name</Text>
                <TextInput   value='Wai Yan Min Lwin' className='w-1/2 text-right font-semibold text-sm' />
            </View>
            <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
            style={styles.customBorder}
            >
                <Text className='w-1/2 '>userID</Text>
                <TextInput  value='@PRIME_WAIYAN'  className='w-1/2 text-right font-semibold text-sm' />
            </View>
            <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
            style={styles.customBorder}
            >
                <Text className='w-1/2 '>Phone Number</Text>
                <TextInput  value='+959 2323232323' className='w-1/2 text-right font-semibold text-sm' />
            </View>
            <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
            style={styles.customBorder}
            >
                <Text className='w-1/2 '>Email</Text>
                <TextInput  value='waiyanminlwin421@gmail.com' className='w-1/2 text-right font-semibold text-sm' />
            </View>
            <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
            style={styles.customBorder}
            >
                <Text className='w-1/2 '>Gender</Text>
                <TextInput  value='Male' className='w-1/2 text-right font-semibold text-sm' />
            </View>
            <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
            style={styles.customBorder}
            >
                <Text className='w-1/2 '>Bio</Text>
                <TextInput  value='Starboy⭐ ' className='w-1/2 text-right font-semibold text-sm' />
            </View>

            {/* Social */}
            <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Social</Text>
            <Pressable className='px-3 flex-row justify-between items-center bg-white rounded-md py-2'>
                <Text>Instagram</Text>
                <View className='flex-row justify-end items-center'>
                    <Text className='font-semibold text-sm'>Add Instagram</Text>
                    <Entypo name='chevron-right' size={24} />
                </View>
            </Pressable>
            <Pressable className='px-3 flex-row justify-between items-center bg-white rounded-md py-2'>
                <Text>Facebook</Text>
                <View className='flex-row justify-end items-center'>
                    <Text className='font-semibold text-sm'>Add Facebook</Text>
                    <Entypo name='chevron-right' size={24} />
                </View>
            </Pressable>
            <Pressable className='px-3 flex-row justify-between items-center bg-white rounded-md py-2'>
                <Text>Instagram</Text>
                <View className='flex-row justify-end items-center'>
                    <Text className='font-semibold text-sm'>Add Instagram</Text>
                    <Entypo name='chevron-right' size={24} />
                </View>
            </Pressable> 
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    customBorder:{
        borderWidth:0,
        borderBottomWidth:0.3,       
    }
})

export default EditProfileDataScreen