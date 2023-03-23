import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({label,defaultValue='',isPassword=false}) => {
  return (
    <View className='flex flex-row justify-between items-center p-3 bg-white border-gray-200' 
    style={styles.customBorder}
    >
        <Text className=''>{label}</Text>
        <TextInput  secureTextEntry={isPassword} value={defaultValue} className='w-1/2 text-right font-semibold text-sm' />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    customBorder:{
        borderWidth:0,
        borderBottomWidth:0.3,       
    }
})