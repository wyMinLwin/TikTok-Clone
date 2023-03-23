import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomInput from '../components/CustomInput'
import SentOPTInput from '../components/SentOPTInput'

const CreateAccountWithPhoneScreen = () => {
  const [sentOTP,setSentOTP] = useState(false)
  return (
    <View className=' flex-1'>
      <Text className='font-semibold text-sm text-gray-400 p-3 '>Enter your phone number</Text>
      
      <View className='w-full bg-white'>
        <CustomInput defaultValue={'+959 000000'} label='Phone number'/>

        {/* OPT code  */}
        <SentOPTInput />

        {/* New Password */}
        <CustomInput isPassword={true} defaultValue={'IamGOAT'} label='New Password'/>
        <CustomInput isPassword={true} defaultValue={'IamGOAT'} label='Confirm New Password'/>
      </View>
      <TouchableOpacity className='my-3 bg-white p-3'>
        <Text className='font-semibold mx-auto'>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateAccountWithPhoneScreen