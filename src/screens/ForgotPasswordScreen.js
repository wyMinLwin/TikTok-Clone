import { StyleSheet, Text, TextInput, View, Pressable,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import SentOPTInput from '../components/SentOPTInput'

const ForgotPasswordScreen = () => {
    const [sentOTP,setSentOTP] = useState(false)

  return (
    <View className='bg-gray-100 flex-1'>
       <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Forgot Password</Text>
       <CustomInput defaultValue={'IamGOAT'} label='Phone or Email'/>
        <SentOPTInput />
        <CustomInput isPassword={true} defaultValue={'IamGOAT'} label='New Password'/>
        <CustomInput isPassword={true} defaultValue={'IamGOAT'} label='Confirm New Password'/>
       <Pressable className='bg-white p-1 py-2 mt-2'>
            <Text className='mx-auto text-lg'>Save</Text>
        </Pressable>
    </View>
  )
}

export default ForgotPasswordScreen
