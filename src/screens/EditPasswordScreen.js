import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../components/CustomInput';

const EditPasswordScreen = () => {
    const navigation = useNavigation();
  return (
    <View className='bg-gray-100 flex-1'>
      <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Your Info</Text>
        <CustomInput isPassword={true} defaultValue={'IamGOAT'} label='Old Password'/>
        <CustomInput isPassword={true} defaultValue={'IamGOAT'} label='New Password'/>
        <CustomInput isPassword={true} defaultValue={'IamGOAT'} label='Confirm New Password'/>

        <Pressable className='bg-white p-1 py-2 mt-2'>
            <Text className='mx-auto text-lg'>Change Password</Text>
        </Pressable>
        <Pressable className='bg-white p-1 py-2 mt-2'
        onPress={() => navigation.navigate('ForgotPasswordStack')}>
            <Text className='mx-auto text-lg text-red-600'>Forgot Password</Text>
        </Pressable>
    </View>
  )
}

export default EditPasswordScreen