import { StyleSheet, Text, TextInput, View, Pressable,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const ForgotPasswordScreen = () => {
    const [sentOTP,setSentOTP] = useState(false)

  return (
    <View className='bg-gray-100 flex-1'>
       <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Forgot Password</Text>
       <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
        style={styles.customBorder}
        >
            <Text className='w-1/2 '>Phone or Email</Text>
            <TextInput  value='--------' className='w-1/2 text-right font-semibold text-sm' />
        </View>
        <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
        style={styles.customBorder}
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
       <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
        style={styles.customBorder}
        >
            <Text className='w-1/2 '>New Password</Text>
            <TextInput secureTextEntry={true} className='w-1/2 text-right font-semibold text-sm' />
        </View>
        <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
        style={styles.customBorder}
        >
            <Text className='w-1/2 '>Confirm New Password</Text>
            <TextInput secureTextEntry={true} className='w-1/2 text-right font-semibold text-sm' />
        </View>
       <Pressable className='bg-white p-1 py-2 mt-2'>
            <Text className='mx-auto text-lg'>Save</Text>
        </Pressable>
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    customBorder:{
        borderWidth:0,
        borderBottomWidth:0.3,       
    }
})