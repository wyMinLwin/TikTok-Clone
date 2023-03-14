import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import ProfileVideoButtons from './ProfileVideoButtons'

const ProfileData = (props) => {
  return (
    <View>
        <View className='mx-auto my-5 w-full'>
            <Image className='w-28 h-28 mx-auto rounded-full' source={{uri:'https://scontent.frgn4-1.fna.fbcdn.net/v/t39.30808-6/331983456_772736064272486_6062597388829844809_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dVmbGvZ98IIAX_JMwIK&_nc_ht=scontent.frgn4-1.fna&oh=00_AfCIPeeVCf-WWiRiYdBLHv-zYQdF2hZQQGALEahQ0_93rQ&oe=6413C483'}} />
            <View className='mx-auto  my-3'>
                <Text className='text-2xl font-semibold'>PRIME_WAIYAN</Text>
            </View>
            <View className='mx-auto w-11/12 flex-row justify-evenly' >
                <Pressable className='flex-col justify-center items-center'>
                    <Text className='text-lg font-light'>Fans</Text>
                    <Text className='text-base font-light mt-2'>2.2M</Text>
                </Pressable>
                <Pressable className='flex-col justify-center items-center'>
                    <Text className='text-lg font-light'>Posts</Text>
                    <Text className='text-base font-light mt-2'>7</Text>
                </Pressable>
                <Pressable className='flex-col justify-center items-center'>
                    <Text className='text-lg font-light'>Love</Text>
                    <Text className='text-base font-light mt-2'>2.4M</Text>
                </Pressable>
            </View>
        </View>
        <ProfileVideoButtons {...props} />
    </View>
  )
}

export default ProfileData