import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CreateAccountWithPhoneScreen = () => {
  const [sentOTP,setSentOTP] = useState(false)
  return (
    <View className=' flex-1'>
      <Text className='font-semibold text-sm text-gray-400 p-3 '>Enter your phone number</Text>
      <View className='w-full bg-white'>
        <View className='flex flex-row justify-between p-3 border-gray-200' 
        style={{
          borderWidth:0,
          borderBottomWidth:0.3,       
        }}
        >
          <Text className='w-1/2'>Phone number</Text>
          <TextInput className='w-1/2 text-right' />
        </View>

        {/* OPT code  */}
        <View className='flex flex-row justify-between p-3 border-gray-200' 
        style={{
          borderWidth:0,
          borderBottomWidth:0.3,       
        }}
        >
          <Text className='w-1/2'>OPT Code</Text>
          {sentOTP
            ?<TextInput value='232323' className='w-1/2 text-right text-blue-500' />
            :<TouchableOpacity
            onPress={() => setSentOTP(prev => !prev)}
            >
                <Text className='text-blue-500'>
                  Send OTP
                </Text>
              </TouchableOpacity>
          }
        </View>

        {/* New Password */}
        <View className='flex flex-row justify-between p-3 border-gray-200' 
        style={{
          borderWidth:0,
          borderBottomWidth:0.3,       
        }}
        >
          <Text className='w-1/2 '>New Password</Text>
          <TextInput secureTextEntry={true} className='w-1/2 text-right' />
        </View>

        {/* Confirm new password */}
        <View className='flex flex-row justify-between p-3 border-gray-200' 
        style={{
          borderWidth:0,
          borderBottomWidth:0.3,       
        }}
        >
          <Text className='w-1/2'>Confirm New Password</Text>
          <TextInput secureTextEntry={true} className='w-1/2 text-right' />
        </View>
      </View>
      <TouchableOpacity className='my-3 bg-white p-3'>
        <Text className='font-semibold mx-auto'>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateAccountWithPhoneScreen