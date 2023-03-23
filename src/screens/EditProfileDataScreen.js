import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomInput from '../components/CustomInput'
import EditMenuButton from '../components/EditMenuButton'


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
            
            {/* Your Info */}
            <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Your Info</Text>
            <CustomInput label={'Name'} defaultValue='Wai Yan Min Lwin' />
            <CustomInput label={'userID'} defaultValue='@PRIME_WAIYAN' />
            <CustomInput label={'Phone Number'} defaultValue='+95 232323' />
            <CustomInput label={'Email'} defaultValue='waiyanminlwin421@gmail.com' /> 
            <CustomInput label={'Gender'} defaultValue='Male' /> 
            <CustomInput label={'Bio'} defaultValue='Starboy⭐' /> 
            

            {/* Social */}
            <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Social</Text>
            <EditMenuButton 
            onPress={() => {}}
            leftLabel={'Instagram'}
            rightLabel={'Add Instagram'}
            rightIcon={() => <Entypo name='chevron-right' size={24} />}
            />
            <EditMenuButton 
            onPress={() => {}}
            leftLabel={'Facebook'}
            rightLabel={'Add Facebook'}
            rightIcon={() => <Entypo name='chevron-right' size={24} />}
            />
            <EditMenuButton 
            onPress={() => {}}
            leftLabel={'Twitter'}
            rightLabel={'Add Twitter'}
            rightIcon={() => <Entypo name='chevron-right' size={24} />}
            />
        </View>
    </View>
  )
}

export default EditProfileDataScreen