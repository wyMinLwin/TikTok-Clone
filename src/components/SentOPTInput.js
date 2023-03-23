import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const SentOPTInput = () => {
    const [sentOTP,setSentOTP] = useState(false)
  return (
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
  )
}

export default SentOPTInput

const styles = StyleSheet.create({
    customBorder:{
        borderWidth:0,
        borderBottomWidth:0.3,       
    }
})