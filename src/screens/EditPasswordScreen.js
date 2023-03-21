import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const EditPasswordScreen = () => {
    const navigation = useNavigation();
  return (
    <View className='bg-gray-100 flex-1'>
      <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Your Info</Text>
        <View className='flex flex-row justify-between p-3 bg-white border-gray-200' 
        style={styles.customBorder}
        >
            <Text className='w-1/2 '>Old Password</Text>
            <TextInput value='hehehe' secureTextEntry={true} className='w-1/2 text-right font-semibold text-sm' />
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
            <Text className='mx-auto text-lg'>Change Password</Text>
        </Pressable>
        <Pressable className='bg-white p-1 py-2 mt-2'
        onPress={() => navigation.navigate('ForgotPasswordStack')}>
            <Text className='mx-auto text-lg text-red-600'>Forgot Password</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    customBorder:{
        borderWidth:0,
        borderBottomWidth:0.3,       
    }
})

export default EditPasswordScreen