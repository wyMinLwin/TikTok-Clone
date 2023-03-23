import { View, Text } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import EditMenuButton from '../components/EditMenuButton'

const LanguageScreen = () => {
  return (
    <View>
        <Text className='font-bold text-md text-gray-500 p-2 mt-1'>App Language</Text>
        <EditMenuButton
        leftLabel='Choose your default language'
        rightIcon={() => <Entypo name='chevron-right' size={24} /> }
        />
    </View>
  )
}

export default LanguageScreen