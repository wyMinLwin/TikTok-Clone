import { View, Text,Pressable, Switch } from 'react-native'
import React, { useState } from 'react'

const DarkModeScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
        <Text className='font-bold text-md text-gray-500 p-2 mt-1'>App Display</Text>
        <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'>
            <View className='flex-row justify-start items-center'>
                <Text className='font-semibold text-sm'>Dark Mode</Text>
            </View>
            <Switch
            trackColor={{false:'white',true:'black'}}
            value={isEnabled}
            onChange={() => toggleSwitch()}
            />
        </Pressable>
    </View>
  )
}

export default DarkModeScreen