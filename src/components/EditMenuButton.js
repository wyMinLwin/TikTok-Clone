import { View, Text,Pressable } from 'react-native'
import React from 'react'
const noOnPress = () => {}

const EditMenuButton = ({leftIcon,leftLabel,rightIcon,rightLabel,onPress=noOnPress}) => {
  return (
    <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'
    onPress={() => onPress()}
    >
        <View className='flex-row justify-start items-center'>
            {Boolean(leftIcon) && leftIcon()}
            {<Text className={`${Boolean(leftIcon) && 'ml-3 '} font-semibold text-sm`} >{leftLabel}</Text> || <></>}
        </View>
        <View className='flex-row justify-end items-center'>
            {<Text className={`font-semibold text-sm`} >{rightLabel}</Text> || <></>}
            {Boolean(rightIcon) && rightIcon()}
        </View>
    </Pressable>
  )
}

export default EditMenuButton