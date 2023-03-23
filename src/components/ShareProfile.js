import { View, Text,Pressable } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import EditMenuButton from './EditMenuButton'

const ShareProfile = (props) => {
  return (
    <View>
        <Text className='mx-auto p-1 text-md font-semibold mb-2'>Share Profile</Text>
        <EditMenuButton 
          leftIcon={() =>  <FontAwesome name='copy' size={18} />}
          leftLabel={'Copy Profile Link'}
          rightIcon={() => <Entypo name='chevron-right' size={24} /> }
        />
        <EditMenuButton 
          leftIcon={() =>  <FontAwesome name='facebook-square' size={18} />}
          leftLabel={'Share to Facebook'}
          rightIcon={() => <Entypo name='chevron-right' size={24} /> }
        />
        <EditMenuButton 
          leftIcon={() =>  <FontAwesome name='instagram' size={18} />}
          leftLabel={'Share to Instagram'}
          rightIcon={() => <Entypo name='chevron-right' size={24} /> }
        />
        <EditMenuButton 
          leftIcon={() =>  <FontAwesome name='twitter-square' size={18} />}
          leftLabel={'Share to Twitter'}
          rightIcon={() => <Entypo name='chevron-right' size={24} /> }
        />
        
        <Pressable onPress={() => props.closeModel()} className='mx-auto p-2 '>
          <Text className='text-red-500' >Cancel</Text>
        </Pressable>
    </View>
  )
}

export default ShareProfile