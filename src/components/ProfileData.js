import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ProfileVideoButtons from './ProfileVideoButtons'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const ProfileData = (props) => {
    
  return (
    <View>
        <View className='mx-auto my-5 w-full'>
            <Pressable onPress={() => props.setProfilePicVidUpload(prev => prev=true)}>
                <Image className='w-28 h-28 mx-auto rounded-full' source={{uri:'https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/331983456_772736064272486_6062597388829844809_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dVmbGvZ98IIAX_JMwIK&_nc_ht=scontent.frgn4-1.fna&oh=00_AfCIPeeVCf-WWiRiYdBLHv-zYQdF2hZQQGALEahQ0_93rQ&oe=6413C483'}} />
            </Pressable>
            <View className='mx-auto my-3 flex flex-row justify-center items-center'>
                <Text className='text-xl font-semibold mx-1'>Wai Yan Min Lwin</Text>
                <Text className='text-md font-light mx-1'>(@PRIME_WAIYAN)</Text>
            </View>
            <View className='mx-auto'>
                <View className='flex-row justify-center items-center'>
                    <TouchableOpacity>
                        <LinearGradient className='p-2 w-fit rounded-l-full rounded-r-full mx-1'
                        colors={['#edfaf0','#4aff63','#1efb3b']}
                        >
                            <View className='flex-row'>
                            <FontAwesome name='male' /><Text> Add Bio</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <LinearGradient className='p-2 w-fit rounded-l-full rounded-r-full mx-1'
                        colors={['#ffc1e4','#fd3c80','#fe1d6d']}
                        >
                            <Text>Lvl 1</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className='my-2 bg-gray-500 w-full p-1 rounded-sm mx-auto flex-row items-center '>
                    <FontAwesome name='plus' color={'white'} /><Text className='ml-1 text-white'>Add Bio</Text>
                </TouchableOpacity>
            </View>
            <View className='mx-auto w-full flex-row justify-evenly' >
                <Pressable className='flex-col justify-center items-center'>
                    <Text className='text-lg font-light'>Love</Text>
                    <Text className='text-base font-light mt-2'>2.4M</Text>
                </Pressable>
                <Pressable className='flex-col justify-center items-center'>
                    <Text className='text-lg font-light'>Fans</Text>
                    <Text className='text-base font-light mt-2'>2.2M</Text>
                </Pressable>
                <Pressable className='flex-col justify-center items-center'>
                    <Text className='text-lg font-light'>Following</Text>
                    <Text className='text-base font-light mt-2'>23</Text>
                </Pressable>
                <Pressable className='flex-col justify-center items-center'>
                    <Text className='text-lg font-light'>Share</Text>
                    <Text className='text-base font-light mt-2'>2M</Text>
                </Pressable>
                
            </View>
        </View>
        <ProfileVideoButtons {...props} />
        
    </View>
  )
}

export default ProfileData